import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Carousel from './components/Carousel'
import './styles/Wrapper.scss'

/* configure store */
const store = configureStore()

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="wrapper">
          <div className="carouselTitle">Carousel Test</div>
          <Carousel />
        </div>
      </Provider>
    );
  }
}

export default App;
