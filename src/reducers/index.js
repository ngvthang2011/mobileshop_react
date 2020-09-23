import { combineReducers } from 'redux'
import cart from './cartReducer'
import user from './userReducer'

// định nghĩa các reducer khác ...

// gom các reducer lại
const rootReducer = combineReducers({
  cart,
  // user
  // nếu có reducer khác thì add thêm ở đây
})

export default rootReducer