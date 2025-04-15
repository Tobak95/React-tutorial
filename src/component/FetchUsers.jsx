import React from "react";
import { useEffect, useState } from "react";

//firstname lastname gender city images address
const url = "https://dummyjson.com/users";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.users);
      setUsers(data.users);
    };
    getUsers();
  }, []);
  // return (
  //   <div className="max-w-[1240px] mx-auto">
  //     <h1 className="text-[40px] font-bold  ">LIST OF USERS</h1>

  //     <section className="flex items-center gap-5 flex-wrap">
  //       {users.map((user) => {
  //         const {} = user;
  //       })}
  //     </section>
  //   </div>
  // );
};

export default FetchUsers;
