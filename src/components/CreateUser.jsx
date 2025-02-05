import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
  const navigate = useNavigate()

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [place, setPlace] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    const userData = {id, name, place, phone}
    fetch("http://localhost:8000/user", {
      method: 'POST',
      headers:{
        "content-type" : "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then((res) => {
      alert('User data is saved successfully')
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
      <h1>Create New User</h1>
      <div className='form-container'>
      <form onSubmit={handleSubmit} className='form'>
        <label htmlFor="id">ID:</label>
        <input type="text" id='id' required value={id} onChange={e => setId(e.target.value)} />

        <label htmlFor="name">Name:</label>
        <input type="text" id='name' required value={name} onChange={e => setName(e.target.value)}/>
        {/* {name.length === 0 && <span>Please Enter your name</span>} */}

        <label htmlFor="place">Place:</label>
        <input type="text" id='place' required value={place} onChange={e => setPlace(e.target.value)}/>

        <label htmlFor="phone">Phone:</label>
        <input type="text" id='phone' required value={phone} onChange={e => setPhone(e.target.value)}/>

        <button className='btn-form'>Create User</button> 
      </form>
      </div>
    </div>
  )
}

export default CreateUser
