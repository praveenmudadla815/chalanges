import React, { useState, useEffect } from "react";

const PagiNation = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

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
          //pagintaion api
          `https://jsonplaceholder.typicode.com/users?_page= ${currentPage} &_limit=1`
        );
        const data = await response.json();
        setUsers(data);
        //pagianation feture
        const totalCount = response.headers.get("X-Total-Count");
        setTotalPages(Math.ceil(totalCount / 1));
        console.log(data, "data");
      } catch (error) {
        console.error("data is error");
      }
    };
    FatchUser();
  }, [currentPage]);

  const prevous = () => {
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const next = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h3>{user.address.city}</h3>
        </div>
      ))}
      <button onClick={prevous} disabled={currentPage === 1}>
        prev
      </button>
      <span>
        {currentPage} of {totalPages}
      </span>
      <button onClick={next} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default PagiNation;
