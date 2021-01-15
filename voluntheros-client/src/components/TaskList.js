import React, { useState } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import DateChooser from './DateChooser';
import { createTasks } from '../api';
import { fetchTasks } from '../api';


function TaskList({ username, tasks }) {

    console.log("tasks", tasks)

    const [value, setValue] = useState("");
    
    const handleOnChange = val => {
        setValue(val);
    }

    const clearState = () => {
        setValue("");
    }

    const setTask = sessionStorage.setItem("value", value);
    const getTask = sessionStorage.getItem("value");
    console.log("session storage", getTask)

    function onSelectTask() {

        // if (username === "rubyred") {
        //     clearState();
        //     alert("Your request has been saved");
        // }
    }

    const newTask = () => {
        createTasks({ title: getTask, elderly_id: 1, date: "Mon" })
        // alert("task saved")
    }
    
    // const chooseTasks = () => {
    //     fetchTasks({ task: }).then(
    //         (res) => {
    //             clearState();
    //         }
    //     )
    // }

    const options = [
        { label: 'Groceries', value: 'Groceries' },
        { label: 'PostOffice', value: 'PostOffice' },
        { label: 'Companionship', value: 'Companionship' },
        { label: 'Transportation', value: 'Transportation' },
        { label: 'Repair', value: 'Repair' },
        { label: 'Gardening', value: 'Gardening' },
        { label: 'Walks', value: 'Walks' },
        { label: 'Other', value: 'Other' },
    ]

    return (
        <div className="task-list-container">
            <DateChooser />
            <div className="preview-values">
                <h4>Select a Task</h4>
                {value}
            </div>

            <MultiSelect
                onChange={handleOnChange}
                options={options}
            />
            <button 
                className="save-task-button"
                onClick={newTask}
            > Save Your Request </button>
            
        </div>
    );
}
export default TaskList;