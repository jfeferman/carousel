import {
  LOAD_IMAGES,
  UPDATE_IMAGE_INDEX
} from '../actions/types'

const INITIAL_STATE = {
  images: [],
  selectedIndex: 0, 
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return {
        ...state,
        images: action.payload
      }  
    case UPDATE_IMAGE_INDEX:
      return {
        ...state,
        selectedIndex: action.payload
      }
    default:
      return state
  }
}