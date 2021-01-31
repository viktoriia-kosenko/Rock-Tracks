import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE,
  TrackI,
  TracksDispatchType
} from './tracksActionTypes'

export interface TracksStateI {
  loading: boolean
  error: null | string
  tracks: null | TrackI[]
}

const initialState = {
  loading: false,
  error: null,
  tracks: null
}

export const tracksReducer = (
  state: TracksStateI = initialState,
  action: TracksDispatchType
): TracksStateI => {
  switch (action.type) {
    case FETCH_TRACKS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_TRACKS_SUCCESS:
      return {
        tracks: action.payload,
        loading: false,
        error: null
      }
    case FETCH_TRACKS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default tracksReducer
