import React, { useEffect, useState } from "react";

const Selector = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const FetchMethod = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        console.log(data, "praveen");
      } catch (error) {
        console.log("error message");
      }
    };
    FetchMethod();
  }, []);

  const handelChange = (e) => {
    const selectedUserid = e.target.value;
    const selectedUser = users.find(
      (user) => user.id.toString() === selectedUserid
    );
    setSelectedUser(selectedUser);
  };
  return (
    <div>
      <select onChange={handelChange}>
        <option value=""> selected user</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {" "}
            {user.name}
          </option>
        ))}
      </select>

      <br></br>
      {selectedUser && (
        <div>
          <p>Name:{selectedUser.name}</p>
          <p>UserName:{selectedUser.username}</p>
          <p>email:{selectedUser.email}</p>
          <p>city:{selectedUser.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default Selector;


// if handling two apis 

import React, { useEffect, useState } from "react";

const Selector = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const fetchUserDetails = async (userId) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const handleChange = (e) => {
    const selectedUserId = e.target.value;
    const selectedUser = users.find(
      (user) => user.id.toString() === selectedUserId
    );
    setSelectedUser(selectedUser);
    fetchUserDetails(selectedUserId); // Fetch user details when a user is selected
  };

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>

      <br />
      {userDetails && (
        <div>
          <h3>User Details:</h3>
          <p>Name: {userDetails.name}</p>
          <p>Username: {userDetails.username}</p>
          <p>Email: {userDetails.email}</p>
          <p>City: {userDetails.address.city}</p>
        </div>
      )}
    </div>
  );
};

export default Selector;
