import React, { Component } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import {
  Row, Col
} from 'reactstrap'
import Topbar from 'src/shared/Topbar'
import routes from 'src/routes'

class Default extends Component {
  render() {
    return (
      <div className="default-layout">
        <Topbar/>
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
      </div>
    )
  }
}

export default Default
