import { LikesAction, ADD_LIKE, REMOVE_LIKE } from './likesActions'

export interface LikesStateI {
  likes: number[]
}

const initialState = { likes: [1496428537, 420075084] }

export const likesReducer = (
  state: LikesStateI = initialState,
  action: LikesAction
): LikesStateI => {
  switch (action.type) {
    case ADD_LIKE:
      return { ...state, likes: [...state.likes, action.trackId] }
    case REMOVE_LIKE:
      const filteredLikes = state.likes.filter((l) => l !== action.trackId)
      return { ...state, likes: filteredLikes }
    default:
      return state
  }
}
