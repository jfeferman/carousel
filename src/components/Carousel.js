import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Carousel.scss'

class Carousel extends Component {
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)