import React from 'react'
//template , functionalities
// when using javascrippt in react , we use the curly braces to enclose the code {}
//writing functions in react have to come before the RETURN
const dynamic = () => {
    const myName = "John Doe";
  return (
    <div className='text-3xl text-center'>
        <h1>DYNAMIC VALUES</h1>
        <p>My name is {myName} </p>
        <p> {1 + 1} </p>
    </div>
  )
}

export default dynamic