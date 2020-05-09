import { SET_IMAGES } from './imageTypes'

export const setImages = images => {
  return {
    type: SET_IMAGES,
    payload: images,
  }
}
