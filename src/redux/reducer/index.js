import {combineReducers} from 'redux'
import NormalReducer from  './NormalReducer'
import StarReducer from  './StarReducer'

const rootReducer=combineReducers({
    NormalReducer,StarReducer
})
export default rootReducer;
