import React, {useState} from 'react';

const Task = ( addTask ) => {
    const [task , setTask] = useState("");

    const handleSubmit = (e) => {
        addTask([task]);
        e.preventDefault();
    }
    return (
        <div>
            <h1>Ajouter une tâche</h1>
            <form onSubmit={event => {handleSubmit(event)}}>
                <label>Tâche</label>
                <input
                    type="text"
                    name="task"
                    value={task}
                    onChange={e => setTask(e.target.value)}
                />
            </form>
        </div>
    );
};

export default Task;