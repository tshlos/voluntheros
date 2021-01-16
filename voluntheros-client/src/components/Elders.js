import React, { useEffect } from 'react';
import TaskList from './TaskList';
// import { createTasks } from './api';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function Elders({ tasks }) {
    // username
    const tapioca = 'rubyred'
    // console.log(tasks, 'task?')

    function displayTasks() {
        const myTask = tasks.filter(task => task.elderly_id === 1)
        return myTask.map(task => {
            return <>
                <Card className='grid' key={task.id} style={{ width: '18rem' }}>
                    <Card.Header>{task.title}</Card.Header>
                    <Card.Text>
                        Details: {task.details === null ? 'None' : task.details}
                        {/* {task.date} */}
                    </Card.Text>
                    {/* {tasks.elderly_id === null ?
                        <Button>Add to My Tasks</Button>
                        :
                        <Button disabled>No Longer Available</Button>
                    } */}
                </Card>
            </>

        })
    }

    function displayTakenTask() {
        const takenTask = tasks.filter(task => task.elderly_id !== null)
        return takenTask.map(task => {
            // console.log(task)
            return <>
                <Card className='grid' key={task.id} style={{ width: '18rem' }}>
                    <Card.Header>{task.title}</Card.Header>
                    <Card.Text>
                        Details: {task.details === null ? 'None' : task.details}
                        {/* {task.date} */}
                    </Card.Text>
                </Card>
            </>
        })
    }

    return (
        <div className='container-fluid auto30'>
            <div className='container'>
            <h3>Task that are taken:</h3>
            {displayTasks()}
            </div>

            <div className='container-fluid auto30'>
                <div className='container'>
                <h3>Task that are taken:</h3>
                {displayTakenTask()}
                </div>
            </div>
        </div>
    );
}

export default Elders;