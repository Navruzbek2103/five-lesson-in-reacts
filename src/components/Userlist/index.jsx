import React, { useEffect } from "react";
import { baseUrl } from "../constants";

const index = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetch(`${baseUrl}/userlist`);
      const userList = await user.json();
    };
    fetchUser();
  }, []);

  return (
    <>
      <div className="card shadow p-4 mx-auto my-5 w-75">
        {/* <ul className="input-group"></ul> */}
        <h1 className="text-center text-danger">Allusers</h1>
      </div>
    </>
  );
};

export default index;
