import React from 'react'
import { useState } from 'react'

const Complexstate = () => {
    const [user, Setuser] = useState ({
        fullname: "John Doe",
        age: 56,
        job: "Frontend developer"
    })

    const handleChange = () => {
        Setuser({...user, age: 60, job: "Backend Engineer"})
    }
  return (
    <div>
      <div className="w-[300px] rounded-md shadow-2xl p-1.5 mx-auto my-3">
        <h1 className="text-2xl">Employee Card</h1>
        <p>name: {user.fullname}</p>
        <p>name: {user.job}</p>
        <p>name: {user.age}</p>
        <button onClick={handleChange} className='mybtn'>Change</button>
      </div>
    </div>
  );
}

export default Complexstate