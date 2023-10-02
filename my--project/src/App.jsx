import { useState } from "react";
import "./App.css";
import AddUser from "./Components/user/AddUser.jsx";
import UserList from "./Components/user/UserList";
function App() {
  const [userList, setUserList] = useState([]);
  const getUser = (name, age, collegeName) => {
    setUserList((prev) => {
      return [
        ...prev,
        {
          Username: name,
          Age: age,
          CollegeName: collegeName,
          id: userList.length === 0 ? 1 : userList[userList.length - 1].id + 1,
        },
      ];
    });
  };
  const deleteUser = (uid) => {
    setUserList(userList.filter((user) => user.id !== uid));
  };
  return (
    <>
      <AddUser getuser={getUser} />
      <UserList user={userList} delete={deleteUser} />
    </>
  );
}

export default App;
