import { combineReducers } from 'redux'

import cakeReducer from './cake/cakeReducer'
import iceCreamReducer from './iceCream/iceCreamReducer'
import userReducer from './User/userReducer'

export default combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    user: userReducer
})