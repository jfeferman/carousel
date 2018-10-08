import { combineReducers } from 'redux'
import CarouselReducer from './CarouselReducer'

export default combineReducers({
  carousel: CarouselReducer,
})