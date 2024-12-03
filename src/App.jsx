import React, { useState } from 'react'

const App = () => {

  const [username, setusername] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(username)
    setusername('')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input value={username} onChange={(e)=>{
          setusername(e.target.value)
        }} type="text" placeholder='Enter username' className='rounded px-4 py-3 m-5'/>
        <button className='rounded px-4 py-3 m-5 bg-green-300'>Submit</button>
      </form>
    </div>
  )
}

export default App





