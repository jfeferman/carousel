import React, { Component } from 'react'

/*
 * A single image container used in the carousel, including the image and title
 */
class CarouselImage extends Component {
  render() {
    const { url } = this.props.image
    return (
      <div>
        <img src={url} alt="Image description" />
        <div>Image title</div>
      </div>
    )
  }
}

export default CarouselImage