import React from 'react'
import { Navigate } from 'react-router-dom'
import UpdateUser from './UpdateUser'

export default function UserList(props) {

    return (
        <>
            <div className="card col-sm-4 mb-2">
                <div className="card-body">
                    <h5 className="card-title">{props.user.name}</h5>
                    <p className="card-text">{props.user.email}</p>
                    <p className="card-text">{props.user.role}</p>
                    <button className="btn btn-primary m-1" data-bs-toggle="modal" data-bs-target="#updateModal">Update User</button>
                    <button className="btn btn-danger m-1" onClick={() => props.onDelete(props.user._id)}>Remove</button>
                </div>
            </div>
            <UpdateUser user={props.user}/>
        </>
    )
}