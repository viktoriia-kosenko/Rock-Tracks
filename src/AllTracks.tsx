import React, { useEffect } from 'react'
import { fetchTracks } from './redux/tracksActions'
import { useSelector, useDispatch } from 'react-redux'
import TrackCard from './TrackCard'
import {RootStore} from './redux/store'
import { TracksStateI } from './redux/tracksReducer'

const Tracks = () => {
  const dispatch = useDispatch()
  const { tracks, loading, error } = useSelector<RootStore, TracksStateI>((state) => state.tracksState)

  useEffect(() => {
    !error && dispatch(fetchTracks())
  }, [dispatch, error, tracks])


  if (error){
    return <section>
      <h2> Opps! {error}</h2>
    </section>
  }

  if (loading){
    return <section>
      <h2>Loading...</h2>
    </section>

  }

  return (
    <div className="w-75 mx-auto my-4 d-flex flex-wrap justify-content-around">
      {tracks &&
        tracks.map((track) => (
          <TrackCard key={track.trackId} track={track} />
        ))}
    </div>
  )
}

export default Tracks
