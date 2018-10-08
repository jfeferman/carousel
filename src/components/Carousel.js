import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  loadRemoteImages
} from '../actions'
import '../styles/Carousel.scss'

class Carousel extends Component {
  componentWillMount() {
    this.props.loadRemoteImages()
  }

  render() {
    return (
      <div className="carouselContainer">my carousel</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadRemoteImages: () => dispatch(loadRemoteImages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)