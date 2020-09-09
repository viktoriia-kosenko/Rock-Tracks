import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE
} from './actionTypes'

const tracksReducer = (state = initialState, action) => {
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
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

const initialState = {
  loading: false,
  error: null,
  tracks: null
}
export default tracksReducer
