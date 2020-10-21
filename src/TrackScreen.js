import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { fetchTrackData } from './api'
import { formatDate, formatDuration } from './utils'
import { fetchTrack } from './redux/actionCreators'
import { useSelector, useDispatch } from 'react-redux'

const TrackScreen = () => {
  const dispatch = useDispatch()
  const { trackId } = useParams()
  const trackFromStore = useSelector(
    (state) =>
      state.tracks &&
      state.tracks.results.find((track) => track.trackId.toString() === trackId)
  )

  const { loading, error } = useSelector((state) => state)

  useEffect(() => {
    !trackFromStore && !error && dispatch(fetchTrack(trackId))
  }, [dispatch, error, trackFromStore])

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
        <p>Duration: {formatDuration(trackFromStore.trackTimeMillis)}</p>
        <p>Release Date: {formatDate(trackFromStore.releaseDate)}</p>
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
