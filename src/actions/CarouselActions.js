import axios from 'axios'
import {
  LOAD_IMAGES,
  UPDATE_IMAGE_INDEX
} from './types'


const apiUrl = 'https://pixabay.com/api/'
const apiKey = '9656065-a4094594c34f9ac14c7fc4c39'
const query = 'q=beautiful+landscape&image_type=photo'

/* Load remote images from pixabay */
export const loadRemoteImages = () => {
  return (dispatch) => {
    axios.get(`${apiUrl}?key=${apiKey}&${query}`)
      .then((response) => {
        console.log(response.data.hits)
        let images = response.data.hits
        let imageArray = images.map(function(image, i) {
          let myImage = {
            url: image.previewURL,
            user: image.user,
            likes: image.likes
          }
          return myImage 
        })

        dispatch({
          type: LOAD_IMAGES,
          payload: imageArray
        })
      })
      .catch((error) => {
        console.log('Error retrieving images from the server: ', error)
      })
  }
}

/* Increase selected index by 1 */
export const nextImage = () => {
  return (dispatch, getState) => {
    const state = getState()
    const { selectedIndex, images } = state.carousel
    let newIndex
    if (selectedIndex === images.length) {
      newIndex = selectedIndex
    } else {
      newIndex = selectedIndex + 1
    }

    dispatch({
      type: UPDATE_IMAGE_INDEX,
      payload: newIndex
    })
  }
}

/* Decrease selected index by 1 */
export const previousImage = () => {
  return (dispatch, getState) => {
    const state = getState()
    const { selectedIndex } = state.carousel
    let newIndex
    if (selectedIndex === 0) {
      newIndex = selectedIndex
    } else {
      newIndex = selectedIndex - 1
    }

    dispatch({
      type: UPDATE_IMAGE_INDEX,
      payload: newIndex
    })
  }
}
