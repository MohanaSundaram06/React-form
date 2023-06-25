import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const AddUserHandler = (Uname, Uage) => {
    setUsersList((preUserList) => {
      return [
        ...preUserList,
        { name: Uname, age: Uage, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
