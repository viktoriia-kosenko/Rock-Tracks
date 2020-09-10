import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const TrackCard = ({ track }) => {
  const { artworkUrl100, trackName, artistName, trackPrice, trackId } = track
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

TrackCard.propTypes = {
  track: PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    trackPrice: PropTypes.number.isRequired,
    trackId: PropTypes.number.isRequired
  }).isRequired
}
export default TrackCard
