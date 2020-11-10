import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import {
  isTablet, isBrowser
} from 'react-device-detect'
import ThreeColumn from 'src/layouts/ThreeColumn'
import TwoColumn from 'src/layouts/TwoColumn'
import OneColumn from 'src/layouts/OneColumn'
import '../src/assets/scss/app.scss'

class App extends React.Component{
  render() {
    let Layout = <OneColumn />
    if (isTablet) {
      Layout = <TwoColumn />
    }
    if (isBrowser) {
      Layout = <ThreeColumn />
    }
    return (
      <div className="app">
        <Router>
          {Layout}
        </Router>
      </div>
    )
  }
}

export default App
