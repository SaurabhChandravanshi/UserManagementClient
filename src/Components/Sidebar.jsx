import React, { Component } from 'react'
import AddUser from './AddUser';
import Users from './Users'

export default class Sidebar extends Component {
    constructor() {
        super()
        this.state = { activeTab: 'Add User' }
    }

    changeTab(tabName) {
        this.setState({ activeTab: tabName });
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='my-5'>
                    <ul className="nav nav-tabs col-sm-4">
                        <li className="nav-item" onClick={this.changeTab.bind(this, 'Add User')}>
                            <a className="nav-link" aria-current="page" href='#'>Add User</a>
                        </li>
                        <li className="nav-item" onClick={this.changeTab.bind(this, 'All Users')}>
                            <a className="nav-link" href='#'>All Users</a>
                        </li>
                    </ul>
                </div>
                {
                    this.state.activeTab === 'Add User'? <AddUser/> : <Users/>
                }
            </div>
        )
    }
}
