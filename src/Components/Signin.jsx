import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'

export default class Signin extends Component {

    constructor(props) {
        super(props)
        this.state = { user: { email: "", password: "" }, isLoggedIn: localStorage.getItem('isLoggedIn') };
    }

    async signin(e) {
        e.preventDefault();
        try {
            const response = await fetch('https://users-mgmt.herokuapp.com/api/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.user.email,
                    password: this.state.user.password
                })
            });
            const data = await (await response).json();
            if (data !== null && data.status === 'success') {
                localStorage.setItem('isLoggedIn', true)
                localStorage.setItem('userId', data.id)
                this.props.toggleLogin()
                this.setState({ ...this.state, isLoggedIn: true })
            } else {
                alert('Either email or password invalid.')
            }
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            this.state.isLoggedIn ? <Navigate to='/' /> :
                <div className='container-fluid my-5'>
                    <form className='col-sm-4' onSubmit={this.signin.bind(this)}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input value={this.state.user.email} onChange={(e) => { this.setState({ user: { ...this.state.user, email: e.target.value } }) }} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input value={this.state.user.password} onChange={(e) => { this.setState({ user: { ...this.state.user, password: e.target.value } }) }} type="password" className="form-control" id="password" />
                        </div>

                        <button type="submit" className="btn btn-primary mt-2">Signin to Account</button>
                    </form>
                </div>
        )
    }
}
