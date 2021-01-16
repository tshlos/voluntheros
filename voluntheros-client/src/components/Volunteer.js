import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { updateTasks} from '../api'

function Volunteer({tasks, props}) {

    const reload=()=>window.location.reload();

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
                    <Button onClick={addTask(task.id)}>Add to My Tasks</Button> 
                </Card>
            </>
        })
    }

    function displayTakenTasks() {
        const takenTasks = tasks.filter(task => task.volunteers_id !== null)
        return takenTasks.map(task => {
            return <>
            <Card className='grid' key={`taken${task.id}`} style={{ width: '18rem' }}>
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
            <Card className='grid' key={`my${task.id}`} style={{ width: '18rem' }}>
            <Card.Header>{task.title}</Card.Header>
            <Card.Text>
                Details: {task.details === null ? 'None' : task.details}
                {/* {task.date} */}
            </Card.Text>
            {/* <Button>Cancel</Button>  */}
            <Button onClick={removeTask(task.id)}>Cancel</Button> 
            </Card>
            </>
        })
    }

    function addTask(key) {
        updateTasks({id: key, volunteers_id: 4})
        reload()
    }

    function removeTask(key) {
        updateTasks({id: key, volunteers_id: null})
    }

    useEffect(()=>{
        alert('reload!')
    },[])

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

    


            {/*<Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered display={display} onHide={handleDisplayClose()}>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Task Removed</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Hopefully we can reschedule.</p>
                </Modal.Body>
            </Modal> */}