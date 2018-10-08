import axios from 'axios'
import {
  LOAD_IMAGES
} from './types'

const apiUrl = 'https://pixabay.com/api/'
const apiKey = '9656065-a4094594c34f9ac14c7fc4c39'

export const loadRemoteImages = () => {
  return (dispatch) => {
    axios.get(`${apiUrl}?key=${apiKey}&q=beautiful+landscape&image_type=photo`)
      .then((response) => {
        dispatch({
          type: LOAD_IMAGES,
          payload: ''
        })
      })
  }
}