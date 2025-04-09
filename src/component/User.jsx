import React from "react";
import { useState } from "react";

const User = () => {
  const handleLogin = () => {
    setUser(true);
  };
  const [user, setUser] = useState(false);
  const handleLogout = () => {
    setUser (false)
  }

  //   if (!user) {
  //     return (
  //       <div className="">
  //         <h1>You are not logged in</h1>
  //         <button className="mybtn" onClick={logIn}>Log in</button>
  //       </div>
  //     );
  //   }

  //   return <div>
  //     <h1>Welcome to your dashboard</h1>
  //     <button className="mybtn" onClick={() => setUser(false)}>Log Out</button>
  //   </div>;

  return (
    <>
      {!user ? (
        <div>
          <h1>You are Not logged in</h1>
          <button onClick={handleLogin} className="mybtn">
            Log in now
          </button>
        </div>
      ) : (
        <div>
          <h1>Welcome User</h1>
          <button onClick={handleLogout} className="mybtn">
            Log out
          </button>
        </div>
      )}
    </>
  );
};

export default User;
