import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { RootStore } from './redux/store'
import { TracksStateI } from './redux/tracksReducer'
import { TrackI } from './redux/tracksActionTypes'
import { fetchTracks } from './redux/tracksActions'

interface ParamsType{
  trackId: string
}

const TrackScreen = () => {
  const dispatch = useDispatch()
  const { trackId } = useParams<ParamsType>()
  const {tracks, loading, error } = useSelector<RootStore, TracksStateI>((state) => state.tracksState)
const [trackFromStore, setTrackFromStore]=useState<TrackI | undefined>(undefined)


  useEffect(() => {
    !tracks && !error && dispatch(fetchTracks())
    const track= tracks?.find(track=>track.trackId.toString()===trackId)
    track&&setTrackFromStore(track)
  }, [dispatch, error, trackId, tracks])

  if (error) {
    return (
      <section>
        <h2>Ops! </h2>
      </section>
    )
  }

  if (loading) {
    return (
      <section>
        <h2>Loading ...</h2>
      </section>
    )
  }

  if (!trackFromStore) {
    return (
      <section>
        <h2>Track not found </h2>
      </section>
    )
  }

  return (
    <div className="w-75 mx-auto my-4 d-flex flex-wrap justify-content-center">
      <img
        className="m-4 rounded"
        height={150}
        width={150}
        src={trackFromStore.artworkUrl100}
        alt=""
      />
      <div className="m-4 ">
        <p className="font-weight-bold mb-0 track-name text-secondary">
          {trackFromStore.trackName}
        </p>
        <p className="font-italic">By {trackFromStore.artistName}</p>
        <p>$ {trackFromStore.trackPrice}</p>
        {/* <p>Duration: {formatDuration(trackFromStore.trackTimeMillis)}</p>
        <p>Release Date: {formatDate(trackFromStore.releaseDate)}</p> */}
        <a
          href={trackFromStore.trackViewUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          More details ...
        </a>
      </div>
    </div>
  )
}

export default TrackScreen
