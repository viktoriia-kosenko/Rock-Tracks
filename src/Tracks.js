import React, { useEffect } from 'react'
import { fetchTracks } from './redux/actionCreators'
import { useSelector, useDispatch } from 'react-redux'
import TrackCard from './TrackCard'

const Tracks = () => {
  const dispatch = useDispatch()
  const { tracks, loading, error } = useSelector((state) => state)

  useEffect(() => {
    !tracks && !error && dispatch(fetchTracks())
  }, [dispatch, error, tracks])

  return (
    <div className="w-75 mx-auto my-4 d-flex flex-wrap justify-content-around">
      {error && <p>{tracks.error}</p>}
      {loading && <p>loading ...</p>}

      {tracks &&
        tracks.results.map((track) => (
          <TrackCard key={track.trackId} track={track} />
        ))}
    </div>
  )
}

export default Tracks
