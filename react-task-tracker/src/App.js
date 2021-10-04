import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  // the function setTasks is to update the state
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "October 1st at 5 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "October 2nd at 7 pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "October 3st at 8 pm",
      reminder: false,
    },
  ]);

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder 
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))

  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
