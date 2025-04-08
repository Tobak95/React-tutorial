import React from 'react'
//list out the users using the map method and for the each user return an H1  and the name shpuld ne clolorgreem
const Simplelist = () => {
    const costomers = ["Ade", "Bode", "Cade", "Dade", "Ede"];
    const users = ["seyi", "tola", "seun", "segun", "tobi"];
  return (
    <div>
    <h1>Outputting List in React</h1>
    <div>
        {
            costomers.map((costomer, index) =>{
                return <p key={index}> {costomer} </p>;
            })    
        }
    </div>
        <div>
            {
                users.map((user, index) =>{
                    return <h1 key={index} className='text-green-400'> {user.toUpperCase()} </h1>
                })
            }
        </div>




    </div>
  )
}

export default Simplelist