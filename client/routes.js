import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import Home from './components/Home'

class Routes extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <Switch>
        <Route component={Home} />
      </Switch>
    )
  }
}

export default Routes;
