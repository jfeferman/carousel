import React, { Component } from 'react'
import { connect } from 'react-redux'
import CarouselImage from './common/CarouselImage'
import {
  loadRemoteImages
} from '../actions'
import '../styles/Carousel.scss'

class Carousel extends Component {
  componentWillMount() {
    this.props.loadRemoteImages()
  }

  render() {
    const { images } = this.props
    return (
      <div className="carouselContainer">
        {images.map((image, index) => {
          return (
            <div key={index} className="imageContainer">
              <CarouselImage image={image} />
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { images } = state.carousel
  return {
    images
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRemoteImages: () => dispatch(loadRemoteImages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)