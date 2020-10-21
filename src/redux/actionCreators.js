import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE
} from './actionTypes'
import { fetchTracksData, fetchTrackData } from '../api'

export const fetchTracksRequest = () => {
  return {
    type: FETCH_TRACKS_REQUEST
  }
}
export const fetchTracksSuccess = (tracks) => {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks
  }
}

export const fetchTracksFailure = (error) => {
  return {
    type: FETCH_TRACKS_FAILURE,
    payload: error
  }
}

export const fetchTracks = () => {
  return (dispatch) => {
    dispatch(fetchTracksRequest())
    fetchTracksData()
      .then((data) => {
        dispatch(fetchTracksSuccess(data))
      })
      .catch((err) => {
        dispatch(fetchTracksFailure('There was an error on the server side'))
      })
  }
}

export const fetchTrack = (trackId) => {
  return (dispatch) => {
    dispatch(fetchTracksRequest())
    fetchTrackData(trackId)
      .then((data) => {
        dispatch(fetchTracksSuccess(data))
      })
      .catch((err) => {
        dispatch(fetchTracksFailure('There was an error on the server side'))
      })
  }
}
