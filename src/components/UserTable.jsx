import React, {useState, useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'

const UserTable = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([])
  useEffect(()=>{
      fetch('http://localhost:8000/user')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data)
        console.log(data)})
      .catch((error) => console.log(error.message))
  }, [])

  const handleView = (id) =>{
    // console.log(id)
    navigate("/user/view/"+id)
  }

  const handleEdit = (id) =>{
    // console.log(id)
    navigate("/user/update/"+id)
  }

  const handleDelete = (id) =>{
    if(window.confirm("Are you sure you want to delete?")){
      fetch("http://localhost:8000/user/"+id, {
        method: 'DELETE',
      })
      .then((res) => {
        alert('User data is removed successfully')
        window.location.reload()
      })
      .catch((error) => console.log(error.message))
    }
  }
  return (
    <div className='container'>
      <h1>User Records</h1>
      <Link to="/user/create" className='btn'>Add New User</Link>
      <div className='userTable'>
        <table>
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Place</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index+1}</td>
                  <td>{user.name}</td>
                  <td>{user.place}</td>
                  <td>{user.phone}</td>
                  <td><button onClick={() => handleView(user.id)} className='btn-table'>View</button> <button  className='btn-table' onClick={() => handleEdit(user.id)} >Edit</button> <button onClick={() => handleDelete(user.id)} className='btn-table'>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable
