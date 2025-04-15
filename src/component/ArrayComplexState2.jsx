import React from "react";
import { useState } from "react";
//maintain the same datatype

const cartItems = [
  { id: 1, name: "Jean", price: 500 },
  { id: 2, name: "Turker Hat", price: 300 },
  { id: 3, name: "Baseball Cap", price: 400 },
  { id: 4, name: "Socks", price: 200 },
];

const ArrayComplexState2 = () => {
  const [cart, setCart] = useState(cartItems);
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const handleRemoveItems = (itemId) => {
    const remaining = cart.filter((item) => item.id !== itemId)
    setCart (remaining);
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-[500px] mx-auto my-4 shadow-2xl rounded-lg p-2.5 text-center ">
        <h1 className="text-2xl mb-2.5"> Your Cart Is Empty</h1>
        <button
          onClick={() => setCart(cartItems)}
          className="bg-black text-white rounded-md px-4 py-2"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-[500px] mx-auto my-4 shadow-2xl rounded-lg p-2.5 ">
      <div className="flex items-cover justify-between ">
        <h1 className="font-bold text-2xl">Your Bag</h1>
        <p className="font-bold text-2xl">{cart.length}</p>
      </div>

      <div className="flex flex-col gap-4">
        {cart.map((item) => {
          return (
            <section
              key={item.id}
              className="flex items-center justify-between"
            >
              <div className="flex gap-2 items-center">
                <button onClick={() => handleRemoveItems (item.id)} className="rounded-full cursor-pointer text-red-600">X</button>
                <p>{item.name}</p>
              </div>

              <p>${item.price}</p>
            </section>
          );
        })}
      </div>
      <div className="flex items-center justify-between font-bold mt-2.5 ">
        <p>Total</p>
        <p>${totalPrice}</p>
      </div>

      <div className="my-2.5">
        <button
          onClick={() => setCart([])}
          className="bg-red-500 text-white rounded-md px-4 py-2 font-bold"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ArrayComplexState2;
