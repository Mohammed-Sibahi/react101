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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
