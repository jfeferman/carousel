import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  nextImage,
  previousImage
} from '../actions'

import '../styles/NavigationContainer.scss'

class CarouselNavigation extends Component {
  render() {
    return (
      <div className="navigationContainer">
        <div
          className="prev"
          tabIndex="0"
          onClick={() => this.props.previousImage()}
        >
          Prev
        </div>
        <div
          className="next"
          tabIndex="0"
          onClick={() => this.props.nextImage()}
        >
          Next
        </div>
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
    nextImage: () => dispatch(nextImage()),
    previousImage: () => dispatch(previousImage())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselNavigation)