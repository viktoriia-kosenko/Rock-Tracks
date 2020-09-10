import tracksReducer from '../redux/reducers'
import {
  FETCH_TRACKS_REQUEST,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_FAILURE
} from '../redux/actionTypes'

const initialState = {
  loading: false,
  error: null,
  tracks: null
}

describe('tracksReducer', () => {
  it('should return the initial state', () => {
    expect(tracksReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle FETCH_TRACKS_REQUEST', () => {
    const action = {
      type: FETCH_TRACKS_REQUEST
    }
    const state = {
      loading: false,
      error: null,
      tracks: null
    }
    expect(tracksReducer(state, action).loading).toBeTruthy()
  })

  it('should handle FETCH_TRACKS_SUCCESS', () => {
    const actionSuccess = {
      type: FETCH_TRACKS_SUCCESS,
      payload: [{ track: 'hello' }, { track: 'test2' }]
    }
    const state = {
      loading: false,
      error: null,
      tracks: null
    }
    const result = {
      loading: false,
      error: null,
      tracks: [{ track: 'hello' }, { track: 'test2' }]
    }
    expect(tracksReducer(state, actionSuccess)).toEqual(result)
  })

  it('should handle FETCH_TRACKS_FAILURE', () => {
    const actionFailure = {
      type: FETCH_TRACKS_FAILURE,
      payload: 'This is error message'
    }
    expect(tracksReducer({}, actionFailure).error).toEqual(
      'This is error message'
    )
  })
})
