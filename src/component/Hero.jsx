import React from 'react'

const Hero = () => {
  return (
    <div className="hero bg-black text-white h-screen">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-5 h-full">
        <div className='max-w-[600px]'>
          <h1 className="text-2xl md:text-4xl">Buy Luxury Cars </h1>
          <p className='my-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, quia
            odio delectus, voluptas dolorem minima suscipit adipisci velit quae
            deserunt, similique eaque. Laudantium iusto distinctio nemo
            recusandae, saepe velit nisi.
          </p>
          <button className="bg-white text-black rounded-sm h-[40px] w-[120px] cursor-pointer">
            Shop Now
          </button>
        </div>
        <div>
          <img
            src="https://media.istockphoto.com/id/2170319234/photo/electric-sports-car-tyre-burnout.webp?a=1&b=1&s=612x612&w=0&k=20&c=q04IeqMM_qUyOtQ7YoE1p9xd_PjSrzeXy02NJvlD2EY="
            alt="picture of a car" className='hidden md:block rounded-md w-[500px] object-cover'
          />
        </div>
      </div>
    </div>
  );
}

export default Hero