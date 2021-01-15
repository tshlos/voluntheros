import React, { useState } from 'react';
import MultiSelect from  'react-multiple-select-dropdown-lite';
import 'react-multiple-select-dropdown-lite/dist/index.css';
import DateChooser from './DateChooser';


function TaskList() {

    const [value, setValue] = useState("");

    const handleOnChange = val => {
        setValue(val);
    }

    function selectTask() {
        const setTask = sessionStorage.setItem("value", value);
        const getTask = sessionStorage.getItem("value");
        console.log("session storage", getTask)
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
            > Save </button>
        </div>
    );
}
export default TaskList;