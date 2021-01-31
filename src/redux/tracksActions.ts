import { Dispatch } from 'redux'
import { fetchTracksData } from '../api'

import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
  TrackI,
  TracksDispatchType
} from './tracksActionTypes'

export const fetchTracksRequest = (): TracksDispatchType => {
  return {
    type: FETCH_TRACKS_REQUEST
  }
}
export const fetchTracksSuccess = (tracks: TrackI[]): TracksDispatchType => {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks
  }
}

export const fetchTracksFailure = (error: string): TracksDispatchType => {
  return {
    type: FETCH_TRACKS_FAILURE,
    payload: error
  }
}

export const fetchTracks = () => {
  return (dispatch: Dispatch<TracksDispatchType>) => {
    dispatch(fetchTracksRequest())
    fetchTracksData()
      .then((data) => {
        dispatch(fetchTracksSuccess(data.results))
      })
      .catch((err) => {
        dispatch(fetchTracksFailure('There was an error on the server side'))
      })
  }
}
