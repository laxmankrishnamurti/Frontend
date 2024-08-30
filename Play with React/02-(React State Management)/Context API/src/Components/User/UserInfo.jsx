import React from "react";
import { useUser } from "../../Context/UserContext";

function UserInfo() {
  const { user, password } = useUser();

  return (
    <>
      {user && (
        <div className="bg-red-400 text-center text-2xl mt-4">
          <h1>Welcome {user}</h1>
          <p>Your password is : {password}</p>
        </div>
      )}
    </>
  );
}

export default UserInfo;
