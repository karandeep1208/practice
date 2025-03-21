// import { useState } from "react";
// import AddUserForm from "./components/addUserForm";
// import UserList from "./components/userList";

// function App() {
//   const [users, setUsers] = useState([]);

//   const addUserToList = (user) => {
//     setUsers((prevUsers) => [...prevUsers, user]);
//   };

//   return (
//     <div>
//       <h1>User Profile Manager</h1>
//       <AddUserForm onUserAdded={addUserToList} />
//       <UserList users={users} />
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import AddTaskForm from "./components/addUserForm";
import TaskList from "./components/userList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskToList = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm onTaskAdded={addTaskToList} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;