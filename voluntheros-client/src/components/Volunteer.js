import React, { useCallback, useEffect, useRef, useState } from 'react';
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
                <Button onClick={(e) => addTask(e, task.id)}>Add to My Tasks</Button> 
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
            <Button onClick={(e) => removeTask(e, task.id)}>Cancel</Button> 
            </Card>
            </>
        })
    }

    function addTask(e, key) {
        updateTasks({id: key, volunteers_id: 4})
        window.location.reload();
    }

    function removeTask(e, key) {
        updateTasks({id: key, volunteers_id: null})
        window.location.reload();
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