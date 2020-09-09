import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE
} from './actionTypes'

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
    fetch('https://itunes.apple.com/search?term=rock&media=music', {
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
        dispatch(fetchTracksSuccess(data))
      })
      .catch((err) => {
        dispatch(fetchTracksFailure('There was an error on the server side'))
      })
  }
}
