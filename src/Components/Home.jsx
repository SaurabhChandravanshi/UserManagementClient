import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { LoginContext } from '../LoginContext'
import Sidebar from './Sidebar'

export default class Home extends Component {
  render() {
    return (
      <LoginContext.Consumer>
        {isLoggedIn => {
           return isLoggedIn ? <Sidebar/> : <Navigate to={'/signup'}/>
        }}
      </LoginContext.Consumer>
    )
  }
}
