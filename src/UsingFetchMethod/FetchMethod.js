import React, { useState, useEffect } from "react";

const FetchMethod = () => {
  const [users, setUsers] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setUsers(data);
  //         console.log(data);
  //       })
  //       .catch((error) => console.error("Error:", error));
  //   }, []);

  useEffect(() => {
    const FatchUser = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        console.log(data, "data");
      } catch (error) {
        console.error("data is error");
      }
    };
    FatchUser();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h3>{user.address.city}</h3>
        </div>
      ))}
    </div>
  );
};

export default FetchMethod;
