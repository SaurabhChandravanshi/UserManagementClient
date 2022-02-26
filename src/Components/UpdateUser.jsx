import React, { useRef, useState } from 'react'

export default function UpdateUser({ user }) {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [role, setRole] = useState(user.role);
    const dismissModal = useRef()

    const updateUser = async () => {
        if (name.length < 2 || email.length < 3) {
            alert('All fields are required with valid input.')
        } else {
            try {
                const res = await fetch('http://localhost:4000/api/updateUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email: email, name: name, role: role })
                })
                const data = await res.json();
                if (data != null && data.status === 'success') {
                    alert('User data has been updated.')
                    dismissModal.current.click();
                } else {
                    alert('Failed to update user data')
                }
            } catch (error) {
                alert(error)
            }

        }
    }

    return (
        <>
            <div className="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="updateModalLabel">Update User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="name" className="form-label">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email address</label>
                                    <input disabled value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" />
                                </div>
                                <div className='mb-3'>
                                    <label for="role" className="form-label">Select Role</label>
                                    <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select" aria-label="Default select example" id='role'>
                                        <option value={'Contributor'}>Contributor</option>
                                        <option value={'Editor'}>Editor</option>
                                        <option value={'Author'}>Author</option>
                                        <option value={'Subscriber'}>Subscriber</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={dismissModal} className="btn btn-secondary" type="button" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={() => updateUser()} className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
