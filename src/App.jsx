import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Default from 'src/layouts/Default'
import '../src/assets/scss/app.scss'

class App extends React.Component{
  render() {
    return (
      <div className="app">
        <Router>
          <Default />
        </Router>
      </div>
    )
  }
}

export default App
