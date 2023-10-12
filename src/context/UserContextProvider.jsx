import React, { useContext, useEffect, useState } from "react";
import UserContext from "./UserContext";
import axios from "axios";

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const userData = "";

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const userData = response.data;
        setUsers(userData);
      })
      .catch((error) => {
        console.error("Something went wrong...:", error);
      });
  }, []);

  return (
    <UserContext.Provider value={{ users }}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
