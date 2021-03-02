// LikesAction types

export const ADD_LIKE = 'ADD_LIKE'
export const REMOVE_LIKE = 'REMOVE_LIKE'

interface AddLikeAction {
  type: typeof ADD_LIKE
  trackId: number
}

interface RemoveLikeAction {
  type: typeof REMOVE_LIKE
  trackId: number
}

export type LikesAction = AddLikeAction | RemoveLikeAction

// LikesAction creators

export const addLike = (trackId: number): LikesAction => ({
  type: ADD_LIKE,
  trackId
})

export const removeLike = (trackId: number): LikesAction => ({
  type: REMOVE_LIKE,
  trackId
})
