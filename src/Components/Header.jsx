import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {

    constructor(props) {
        super(props)
    }

    signOut() {
        localStorage.removeItem('isLoggedIn')
        this.props.toggleLogin()
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
                                {
                                    this.props.isLoggedIn ? <a className='nav-link' style={{cursor:'pointer'}} onClick={this.signOut.bind(this)}>Logout</a> :
                                        <>
                                            <Link className="nav-link" to={'signup'}>Signup</Link>
                                            <Link className="nav-link" to={'signin'}>Login</Link>
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
