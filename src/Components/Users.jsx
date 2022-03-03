import React from 'react'
import { useState, useEffect } from 'react';
import UserList from './UserList';
import Alert from './Alert'

export default function Users() {
    const [userData, setUserData] = useState([])

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:4000/api/user/${id}`, {
            method:'DELETE',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})});
            const data = await response.json();
            if(data !=  null && data.status === 'success') {
                setUserData(userData.filter((e) => e._id !== id))
            }
        } catch(error) {
            alert('Failed to delete user')
        }
    }
    async function fetchUsers() {
        try {
            const response = await fetch(`http://localhost:4000/api/user/${localStorage.getItem('userId')}`,
            {
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await response.json();
            if(data != null && data.status === 'success') {
                setUserData(data.userArray);
            }

        } catch(error) {
            alert("Failed to fetch, Internal Server Error")
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])
    
  return (
    <div className='container-fluid'>
        {
            userData.map((e) => {
                return <UserList user={e} onDelete={deleteUser}/>
            })
        }
        {
            userData.length === 0 ? <Alert message='No User Found'/> : null
        }
    </div>
  )
}
