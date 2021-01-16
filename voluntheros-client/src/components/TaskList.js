import React, { useState } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import { createTasks } from '../api';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function TaskList({ username, tasks }) {

    const [dateValue, onChange] = useState(new Date());
    // console.log("date", dateValue)
    const [taskValue, setTaskValue] = useState("");
    const [message, setMessage] = useState("");
    // console.log("message", message)
    
    const handleOnChange = val => {
        setTaskValue(val);
    }
    
    const clearState = () => {
        setTaskValue("");
    }

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
    
    function handleTaskSubmit(e) {
        const task = { title: taskValue, elderly_id: 1, date: dateValue };
        createTasks(task);
        setMessage(task);
    }

    return (
        <div className="task-list-page">
            <div className="task-list-container">
                <Calendar
                    className="task-list"
                    onChange={onChange}
                    value={dateValue}
                />
                {/* <div className="preview-values">
                    <h4>Select a Task</h4>
                    {value}
                </div> */}

                <MultiSelect
                    onChange={handleOnChange}
                    options={options}
                />
                <button 
                    className="save-task-button btn btn-info"
                    onClick={handleTaskSubmit}
                    >
                        Save
                </button>

                {message && (<h4 className="message">Your request for Task: {message.title} on <br></br> 
                {message.date.toString().slice(0, 10)} has been saved! </h4>)}
            </div>
           
     
        </div>
    );
}
export default TaskList;