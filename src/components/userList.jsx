// import { useEffect, useState } from "react";
// import axios from "axios";

// const UserList = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:8800/users")
//       .then(response => setUsers(response.data))
//       .catch(error => console.error("Error fetching users:", error));
//   }, []);

//   return (
//     <div>
//       <h2>User List</h2>
//       <ul>
//         {users.map(user => (
//           <li key={user._id}>{user.name} - {user.email}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserList;



import { useEffect, useState } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8800/tasks")
      .then(response => setTasks(response.data))
      .catch(error => console.error("Error fetching tasks:", error));
  }, []);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;