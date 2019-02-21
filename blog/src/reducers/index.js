// reducers index file
import { combineReducers } from 'redux'
import postsReducers from './postsReducers'
import userReducers from './usersReducer'

export default combineReducers({
  posts: postsReducers,
  users: userReducers
})
