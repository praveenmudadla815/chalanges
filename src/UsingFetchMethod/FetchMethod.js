import React, { useState, useEffect } from "react";

const FetchMethod = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div>
          <h1>{user.name}</h1>
          <h3>{user.address.city}</h3>
        </div>
      ))}
    </div>
  );
};

export default FetchMethod;
