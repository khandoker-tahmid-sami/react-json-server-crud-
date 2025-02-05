import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


const ViewUser = () => {
  const {userid} = useParams()
  const [viewUser, setViewUser] = useState("")
  console.log(userid)

  useEffect(()=>{
    fetch('http://localhost:8000/user/'+userid)
    .then((res) => res.json())
    .then((data) => setViewUser(data))
    .catch((error) => console.log(error.message))
  }, [])
  return (
    <div className='container'>
      <h1>View User</h1>
      {viewUser && <div className='view-user'>
        <p><strong>ID:</strong> <span>{viewUser.id}</span></p>
        <p><strong>Name:</strong> <span>{viewUser.name}</span> </p>
        <p><strong>Place:</strong> <span>{viewUser.place}</span></p>
        <p><strong>Phone: </strong> <span>{viewUser.phone}</span></p>
        <Link to="/" className='btn-view'>Back</Link>
      </div>}
    </div>
  )
}

export default ViewUser
