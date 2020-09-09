import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const TrackScreen = () => {
  const { trackId } = useParams()
  const track = useSelector(
    (state) =>
      state.tracks &&
      state.tracks.results.find((track) => track.trackId + '' === trackId)
  )

  return track ? (
    <div className="w-75 mx-auto my-4 d-flex flex-wrap ">
      <img
        className="m-2 rounded"
        height={100}
        src={track.artworkUrl100}
        alt=""
      />
      <div className="pl-5">
        <p className="">{track.trackName}</p>
        <p className="">by {track.artistName}</p>
        <p className="">$ {track.trackPrice}</p>
        <p className="">Duration: {track.trackTimeMillis}</p>
        <p className="">releaseDate: {track.releaseDate}</p>
        <a href={track.trackViewUrl} target="_blank">
          trackViewUrl
        </a>
      </div>
    </div>
  ) : (
    <section>
      <h2>Track not found!</h2>
    </section>
  )
}

export default TrackScreen
