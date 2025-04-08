import React from 'react'

const SingleProduct = ({image, price, title}) => {
    return <div>
        <img src={image} alt={title} />
        <p className='text-xl'> {title} </p>
        <p className='font-bold'> ${price}</p>
    </div>; 
}
const Jumiaclone = () => {
  return (
    <div>
      <h1>All Products</h1>
      <div className="flex gap-3">
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/86/3683582/1.jpg?8487"
          }
          price={120000}
          title={"Portable Single Burner"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/07/0432633/1.jpg?2985"
          }
          price={150000}
          title={"Electric Kettle Boil"}
        />
        <SingleProduct
          image={
            "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/9233693/1.jpg?0571"
          }
          price={180000}
          title = {"Electric iron"}
        />
      </div>
    </div>
  );
}

export default Jumiaclone