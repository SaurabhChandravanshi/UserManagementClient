import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export default class AddUser extends Component {

    constructor(props) {
        super(props)
        this.state = { user: { name: '', email: '', role: 'Contributor', owner:localStorage.getItem('userId')}, isLoggedIn:localStorage.getItem('isLoggedIn') }
    }

    async addUser(e) {
        e.preventDefault();
        const response = await fetch('https://users-mgmt.herokuapp.com/api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.user.name, email: this.state.user.email, role: this.state.user.role, owner:this.state.user.owner })
        })
        const data = await response.json();
        if (data != null && data.status === 'success') {
            alert('User Added Successfully.');
            this.setState({user:{name:'', email:'', role:'Contributor'}})
        } else {
            alert('User already exist, try using different email address.')
        }
    }

    render() {
        return (!this.state.isLoggedIn ? <Navigate to='/signup' /> :
                        <div className='container-fluid my-5'>
                            <form method='POST' className='col-sm-4' onSubmit={this.addUser.bind(this)}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input value={this.state.user.name} onChange={(e) => { this.setState({ user: { ...this.state.user, name: e.target.value } }) }} type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input value={this.state.user.email} onChange={(e) => { this.setState({ user: { ...this.state.user, email: e.target.value } }) }} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                                </div>
                                <div className='mb-3'>
                                <label htmlFor="role" className="form-label">Select User Role</label>
                                <select value={this.state.user.role} className="form-select" aria-label="Default select example" id='role' onChange={(e) => {this.setState({user:{...this.state.user, role:e.target.value}})}}>
                                    <option value={'Contributor'}>Contributor</option>
                                    <option value={'Editor'}>Editor</option>
                                    <option value={'Author'}>Author</option>
                                    <option value={'Subscriber'}>Subscriber</option>
                                </select>
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">Add User</button>
                            </form>
                        </div>
        )
    }
}
