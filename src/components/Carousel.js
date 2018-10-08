import React, { Component } from 'react'
import { connect } from 'react-redux'
import CarouselImage from './common/CarouselImage'
import CarouselNavigation from './CarouselNavigation'
import {
  loadRemoteImages
} from '../actions'
import '../styles/Carousel.scss'

class Carousel extends Component {
  componentWillMount() {
    this.props.loadRemoteImages()
  }

  render() {
    const { images, selectedIndex } = this.props
    return (
      <div>
        <div className="carouselContainer">
          {images.map((image, index) => {
            let selected = selectedIndex === index

            return (
              <div key={index} className={selected ? "imageContainer selected" : "imageContainer"}>
                <CarouselImage image={image} index={index} />
              </div>
            )
          })}
        </div>
        <CarouselNavigation />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { images, selectedIndex } = state.carousel
  return {
    images,
    selectedIndex
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRemoteImages: () => dispatch(loadRemoteImages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)