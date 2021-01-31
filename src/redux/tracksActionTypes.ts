export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST'
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS'
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE'

export interface TrackI {
  artworkUrl100: string
  trackName: string
  artistName: string
  trackPrice: number
  trackId: number
  trackTimeMillis?: number
  releaseDate?: string
  trackViewUrl: string
}

interface TracksRequest {
  type: typeof FETCH_TRACKS_REQUEST
}

interface TracksSuccess {
  type: typeof FETCH_TRACKS_SUCCESS
  payload: TrackI[]
}

interface TracksFailure {
  type: typeof FETCH_TRACKS_FAILURE
  payload: string
}

export type TracksDispatchType = TracksRequest | TracksSuccess | TracksFailure
