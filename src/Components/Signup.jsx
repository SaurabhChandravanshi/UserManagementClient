import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = { user: { name: '', email: '', password: '' }, isLoggedIn:localStorage.getItem('isLoggedIn') }
    }

    async register(e) {
        e.preventDefault();
        const response = await fetch('http://localhost:4000/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.user.name, email: this.state.user.email, password: this.state.user.password })
        })
        const data = await response.json();
        if (data != null && data.status === 'success') {
            window.location = '/signin';
        } else {
            alert('User already exist, try using different email address or login.')
        }
    }

    render() {
        return (
            this.state.isLoggedIn ? <Navigate to='/' /> :
                <div className='container-fluid my-5'>
                    <form method='POST' className='col-sm-4' onSubmit={this.register.bind(this)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input value={this.state.user.name} onChange={(e) => { this.setState({ user: { ...this.state.user, name: e.target.value } }) }} type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input value={this.state.user.email} onChange={(e) => { this.setState({ user: { ...this.state.user, email: e.target.value } }) }} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input value={this.state.user.password} onChange={(e) => { this.setState({ user: { ...this.state.user, password: e.target.value } }) }} type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-primary mt-2">Create Account</button>
                        <p className='mt-4'>Already have an account ? <Link to='/signin'>Login Here</Link></p>
                    </form>
                </div>
        )
    }
}
