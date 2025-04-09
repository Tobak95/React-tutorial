import React from 'react'

const MyStoreSingleProduct = ({ image, title, price }) => {
  return (
    <div>
      <img src={image} alt={title} />
      <p className='text-xl font-semibold'>{title}</p>
      <p className='font-bold'>${price}</p>

      <div>
        
      </div>
    </div>
    
  );
};

export default MyStoreSingleProduct