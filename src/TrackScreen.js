import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { fetchTrackData } from './api'
import { formatDate, formatDuration } from './utils'

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
      fetchTrackData(trackId)
        .then((data) => {
          setTrack(data.results[0])
          setIsLoading(false)
        })
        .catch((err) => {
          setIsLoading(false)
        })
  }, [trackFromStore, trackId])

  return track ? (
    <div className="w-75 mx-auto my-4 d-flex flex-wrap justify-content-center">
      <img
        className="m-4 rounded"
        height={150}
        width={150}
        src={track.artworkUrl100}
        alt=""
      />
      <div className="m-4 ">
        <p className="font-weight-bold mb-0 track-name text-secondary">
          {track.trackName}
        </p>
        <p className="font-italic">By {track.artistName}</p>
        <p>$ {track.trackPrice}</p>
        <p>Duration: {formatDuration(track.trackTimeMillis)}</p>
        <p>Release Date: {formatDate(track.releaseDate)}</p>
        <a href={track.trackViewUrl} target="_blank" rel="noopener noreferrer">
          More details ...
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
