import axios from 'axios'
import {
  LOAD_IMAGES
} from './types'


const apiUrl = 'https://pixabay.com/api/'
const apiKey = '9656065-a4094594c34f9ac14c7fc4c39'
const query = 'q=beautiful+landscape&image_type=photo'

/* Load remote images from pixabay */
export const loadRemoteImages = () => {
  return (dispatch) => {
    axios.get(`${apiUrl}?key=${apiKey}&${query}`)
      .then((response) => {
        dispatch({
          type: LOAD_IMAGES,
          payload: ''
        })
      })
  }
}