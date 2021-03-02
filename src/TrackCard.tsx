import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TrackI } from './redux/tracksActionTypes'
import { RootStore } from './redux/store'
import { addLike, removeLike } from './redux/likesActions'
import heart from './heart.svg'
import heartGrey from './heart-grey.svg'

interface TrackCardProps {
  track: TrackI
}

const TrackCard: React.FC<TrackCardProps> = ({
  track: { artworkUrl100, trackName, artistName, trackPrice, trackId }
}) => {
  const dispatch = useDispatch()
  const isLiked = useSelector((state: RootStore): boolean =>
    state.likesState.likes.includes(trackId)
  )
  const onLike = () => {
    isLiked ? dispatch(removeLike(trackId)) : dispatch(addLike(trackId))
  }
  return (
    <div className="d-flex border rounded m-2 track-card">
      <div className="d-flex flex-column justify-content-center">
        <img className="m-2 rounded" height={100} src={artworkUrl100} alt="" />
        <img
          alt=""
          src={isLiked ? heart : heartGrey}
          className="mx-auto"
          height={70}
          width={70}
          onClick={onLike}
        />
      </div>
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
