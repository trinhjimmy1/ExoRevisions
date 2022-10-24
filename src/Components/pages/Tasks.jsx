import React, {useState} from 'react';
import Task from "./Task.jsx";

const Tasks = () => {
    const [taskList, setTaskList] = useState([]);
    const addTask = (log) => {
      let logs = [...taskList, log];
      setTaskList(logs);
    };
    console.log(addTask);
    return (
        <div>
            <h1>Liste des tâches</h1>
            <Task addTask={addTask}/>
        </div>
    );
};

export default Tasks;