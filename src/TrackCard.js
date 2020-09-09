import React from 'react'
import { Link } from 'react-router-dom'

const TrackCard = ({ track }) => {
  return (
    <div
      className="d-flex border rounded m-2"
      style={{ width: '325px', background: '#eee' }}
    >
      <img
        className="m-2 rounded"
        height={100}
        src={track.artworkUrl100}
        alt=""
      />
      <div className="ml-2 p-2 d-flex flex-column justify-content-center">
        <p className="mb-0">{track.trackName}</p>
        <p className="mb-0">by {track.artistName}</p>
        <p className="mb-0">$ {track.trackPrice}</p>
        <Link to={`track/${track.trackId}`}>
          <p>Details ...</p>
        </Link>
      </div>
    </div>
  )
}

export default TrackCard
