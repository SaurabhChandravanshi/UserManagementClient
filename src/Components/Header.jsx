import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { LoginContext } from '../LoginContext'

export default class Header extends Component {

    signOut() {
        localStorage.removeItem('isLoggedIn')
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={'/'}>User Management</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto">
                                <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
                                <LoginContext.Consumer>
                                    {isLoggedIn => {
                                        return isLoggedIn ? <a className='nav-link' onClick={this.signOut.bind(this)}>Logout</a> : 
                                        <>
                                        <Link className="nav-link" to={'signup'}>Signup</Link>
                                        <Link className="nav-link" to={'signin'}>Login</Link>
                                        </>
                                    }}
                                </LoginContext.Consumer>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
