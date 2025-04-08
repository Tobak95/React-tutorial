import React from "react";

const Complexlist = () => {
  const staff = [
    {
      id: 1,
      image:
        "https://media.istockphoto.com/id/2165425187/photo/portrait-of-a-woman-in-an-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=Nn0pYLaWhUJCW-9fpqR_C60Glc59sGIEXH1H9zSPRg0=",
      name: "John Doe",
      role: "Chief Operating Officers",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "Jane Doe",
      role: "Chief Financial Officer",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YXZhdGFyfGVufDB8fDB8fHww",
      name: "John Smith",
      role: "Chief Technology Officer",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww",
      name: "Jane Smith",
      role: "Chief Marketing Officer",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
      name: "John Johnson",
      role: "Chief Human Resource Officer",
    },
  ];
  return <div className="bg-blue-200 py-10">
    <h1 className="text-center text-blue-500 text-4xl font-bold">
        Meet the Team
    </h1>
    <p className="my-5 text-center text-md text-black w-[600px] mx-auto"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, unde cumque fugiat soluta totam sint rem dicta ratione inventore quisquam odit, itaque delectus maiores facere laudantium tempore quis maxime et quibusdam impedit. Quos, fugit delectus!</p>

    <div className="flex flex-wrap gap-3.5 max-w-[1000px] mx-auto">
        {
            staff.map((member) =>{
                const {id, name, image, role} = member
                return <div key={id} className="bg-white w-[320px] p-2.5 rounded-md"> 
                <img src={image} alt={name}
                 className="rounded-md h-[300px] w-full object-cover  " />
                 <h1 className="text-blue-900 font-bold text-2xl mt-3">{name}</h1>
                 <p className="text-gray-300 font-semibold">{role}</p>
                </div>
            })
        }
    </div>
  </div>
  
};

export default Complexlist;
