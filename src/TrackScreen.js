import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

const TrackScreen = () => {
  const { trackId } = useParams()
  const trackFromStore = useSelector(
    (state) =>
      state.tracks &&
      state.tracks.results.find((track) => track.trackId + '' === trackId)
  )
  const [track, setTrack] = useState(trackFromStore)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    !trackFromStore &&
      fetch(`https://itunes.apple.com/lookup?id=${trackId}`, {
        method: 'POST'
      })
        .then((res) => {
          if (res.status >= 200 && res.status < 300) {
            return res.json()
          } else {
            throw res
          }
        })
        .then((data) => {
          setTrack(data.results[0])
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
        })
  }, [trackFromStore, trackId])

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
        <a href={track.trackViewUrl} target="_blank" rel="noopener noreferrer">
          trackViewUrl
        </a>
      </div>
    </div>
  ) : (
    !isLoading && (
      <section>
        <h2>Track not found!</h2>
      </section>
    )
  )
}

export default TrackScreen
