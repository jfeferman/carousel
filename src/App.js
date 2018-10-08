import React, { Component } from 'react'
import Carousel from './components/Carousel'
import './styles/Wrapper.scss'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="carouselTitle">Carousel Test</div>
        <Carousel />
      </div>
    );
  }
}

export default App;
