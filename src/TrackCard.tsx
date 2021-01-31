import React from 'react'
import { Link } from 'react-router-dom'
import { TrackI } from './redux/tracksActionTypes'

interface TrackCardProps {
  track: TrackI
}

const TrackCard: React.FC<TrackCardProps> = ({ track: { artworkUrl100, trackName, artistName, trackPrice, trackId } }) => {

  return (
    <div className="d-flex border rounded m-2 track-card">
      <img className="m-2 rounded" height={100} src={artworkUrl100} alt="" />
      <div className="ml-2 p-2 d-flex flex-column">
        <p className="mb-0 font-weight-bold">{trackName}</p>
        <p className="mb-0 track-data">by {artistName}</p>
        <p className="mb-0 track-data">$ {trackPrice}</p>
        <Link to={`track/${trackId}`}>
          <p>Details ...</p>
        </Link>
      </div>
    </div>
  )
}

export default TrackCard
