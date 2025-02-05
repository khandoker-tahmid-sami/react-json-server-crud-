import React, {useState, useEffect} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'

const UpdateUser = () => {
  const {userid} = useParams()
  const navigate = useNavigate()

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(()=>{
    fetch('http://localhost:8000/user/'+userid)
    .then((res) => res.json())
    .then((data) => {
      setId(data.id)
      setName(data.name)
      setPlace(data.place)
      setPhone(data.phone)
    })
    .catch((error) => console.log(error.message))
  }, [])

  const handleUpdate = (e) =>{
    e.preventDefault()
    const userData = {id, name, place, phone}
    fetch("http://localhost:8000/user/"+userid, {
      method: 'PUT',
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then((res) => {
      alert('User data is update successfully')
      navigate("/")
      setId("")
      setName("")
      setPlace("")
      setPhone("")
    })
    .catch((error) => console.log(error.message))

  }
  return (
    <div className='container'>
      <h1>Update user</h1>
      <form onSubmit={handleUpdate} className='form'>
        <label htmlFor="id">ID:</label>
        <input type="text" id='id' required value={id} onChange={e => setId(e.target.value)} />

        <label htmlFor="name">Name:</label>
        <input type="text" id='name' required value={name} onChange={e => setName(e.target.value)}/>
        {/* {name.length === 0 && <span>Please Enter your name</span>} */}

        <label htmlFor="place">Place:</label>
        <input type="text" id='place' required value={place} onChange={e => setPlace(e.target.value)}/>

        <label htmlFor="phone">Phone:</label>
        <input type="text" id='phone' required value={phone} onChange={e => setPhone(e.target.value)}/>

        <button type='submit' className='btn-update'>Update</button> 
        <Link to="/" className='btn-update'>Back</Link>
      </form>
    </div>
  )
}

export default UpdateUser
