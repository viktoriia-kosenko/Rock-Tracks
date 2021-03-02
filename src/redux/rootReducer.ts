import { combineReducers } from 'redux'
import { tracksReducer } from './tracksReducer'
import { likesReducer } from './likesReducer'

const RootReducer = combineReducers({
  tracksState: tracksReducer,
  likesState: likesReducer
})

export default RootReducer
