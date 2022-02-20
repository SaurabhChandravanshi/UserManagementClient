import React from 'react'

export default function Alert({message}) {
    return (
        <div className="alert alert-warning alert-dismissible fade show col-sm-4" role="alert">
            {message}
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}
