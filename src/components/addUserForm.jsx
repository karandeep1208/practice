// import { useState } from "react";
// import axios from "axios";

// const AddUserForm = ({ onUserAdded }) => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8800/users", { name, email });
//       onUserAdded(response.data);
//       setName("");
//       setEmail("");
//     } catch (error) {
//       console.error("Error adding user:", error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <button type="submit">Add User</button>
//     </form>
//   );
// };

// export default AddUserForm;

import { useState } from "react";
import axios from "axios";

const AddTaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8800/tasks", { title });
      onTaskAdded(response.data);
      setTitle("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;