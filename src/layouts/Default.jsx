import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  Row, Col
} from 'reactstrap'
import Navigation from 'src/routes/Navigation'
import routes from 'src/routes/routes'

class Default extends React.Component {
  render() {
    return (
      <div className="default-layout">
        <Router>
          <Navigation/>
          <Row style={{margin: 'auto'}}>
            <Col className="col-12">
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.component/>}
                  >
                  </Route>
                ))}
              </Switch>
            </Col>
          </Row>
        </Router>
      </div>
    )
  }
}

export default Default
