import React from 'react'

export default function UserList(props) {
    return (
        <>
            <div className="card col-sm-4 mb-2">
                <div className="card-body">
                    <h5 className="card-title">{props.user.name}</h5>
                    <p className="card-text">{props.user.role}</p>
                    <a href="#" className="btn btn-danger" onClick={() => props.onDelete(props.user._id)}>Remove</a>
                </div>
            </div>
        </>
    )
}
