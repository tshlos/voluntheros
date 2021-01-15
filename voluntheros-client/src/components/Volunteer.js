import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { updateTasks} from '../api'

function Volunteer({tasks}) {


    function displayAvailTasks() {
        const availTasks = tasks.filter(task => task.volunteers_id === null)
        return availTasks.map(task => {
        return <>
            <Card className='grid' key={task.id} style={{ width: '18rem' }}>
                <Card.Header>{task.title}</Card.Header>
                <Card.Text>
                    Details: {task.details === null ? 'None' : task.details}
                    {/* {task.date} */}
                </Card.Text>
                <Button onClick={() => addTask(task.id)}>Add to My Tasks</Button> 
            </Card>
        </>
        })
    }

    function displayTakenTasks() {
        const takenTasks = tasks.filter(task => task.volunteers_id !== null)
        return takenTasks.map(task => {
            console.log(task)
            return <>
            <Card className='grid' key={task.id} style={{ width: '18rem' }}>
            <Card.Header>{task.title}</Card.Header>
            <Card.Text>
                Details: {task.details === null ? 'None' : task.details}
                {/* {task.date} */}
            </Card.Text>
            <Button disabled>No Longer Available</Button> 
            </Card>
            </>
        })
    }

    function displayMyTasks() {
        const myTasks = tasks.filter(task => task.volunteers_id === 4)
        return myTasks.map(task => {
            return <>
            <Card className='grid' key={task.id} style={{ width: '18rem' }}>
            <Card.Header>{task.title}</Card.Header>
            <Card.Text>
                Details: {task.details === null ? 'None' : task.details}
                {/* {task.date} */}
            </Card.Text>
            <Button>Cancel</Button> 
            </Card>
            </>
        })
    }

//id title details volunteers_id elderly_id

    function addTask(key) {
        updateTasks({id: key, volunteers_id: 4})
        .then(console.log)
    }

    return (
        <div>
            <div className='container-fluid auto30'>
            <div className='container'>
                <h2> Available Tasks</h2>
                {displayAvailTasks()}
            </div>
            <div className='container'>
                <h2>Claimed Tasks</h2>
                {displayTakenTasks()}
            </div>
            <div className='container'>
                <h2>My Tasks</h2>
                {displayMyTasks()}
            </div>
            </div>
        </div>
    );
}

export default Volunteer;