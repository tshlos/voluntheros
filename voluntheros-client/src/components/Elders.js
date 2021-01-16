import React, { useEffect } from 'react';
import TaskList from './TaskList';
// import { createTasks } from './api';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';



function Elders({ task }) {
    // username
    const tapioca = 'rubyred'

    console.log(task, 'task?')
    function displayTasks() {
        const mayTask = task.filter(task => task.elderly_id === 1)
        console.log(mayTask)
        return mayTask.map(task => {
            return <>
                <Card className='grid' key={task.id} style={{ width: '18rem' }}>
                    <Card.Header>{task.title}</Card.Header>
                    <Card.Text>
                        Details: {task.details === null ? 'None' : task.details}
                        {/* {task.date} */}
                    </Card.Text>
                    {task.elderly_id === null ?
                        <Button>Add to My Tasks</Button>
                        :
                        <Button disabled>No Longer Available</Button>
                    }
                </Card>
            </>

        })
    }
    return (
        <div className="elder-task">
            <h2></h2>
            <h3>Task I need done:</h3>
            {displayTasks()}
        </div>
    );
}

export default Elders;