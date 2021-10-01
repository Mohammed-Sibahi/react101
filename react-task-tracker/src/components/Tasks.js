import { useState } from "react";

const Tasks = () => {
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
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
