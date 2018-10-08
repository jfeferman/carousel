import React, { Component } from 'react'
import '../../styles/CarouselImage.scss'

/*
 * A single image container used in the carousel, including the image and title
 */
class CarouselImage extends Component {
  render() {
    const { url } = this.props.image
    const index = this.props.index + 1
    return (
      <div tabIndex="0">
        <img src={url} alt={`Description for ${index}`} />
        <div className="imageTitle">Image {index} title</div>
      </div>
    )
  }
}

export default CarouselImage