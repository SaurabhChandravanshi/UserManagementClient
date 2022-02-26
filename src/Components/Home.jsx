import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import Sidebar from './Sidebar'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      this.props.isLoggedIn ? <Sidebar /> : <Navigate to={'/signup'}/> 
    )
  }
}
