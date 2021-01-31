import { combineReducers } from 'redux'
import { tracksReducer } from './tracksReducer'

const RootReducer = combineReducers({
  tracksState: tracksReducer
})

export default RootReducer
