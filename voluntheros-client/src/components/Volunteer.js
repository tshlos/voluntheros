import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Volunteer({tasks}) {
    console.log(tasks)
  function displayTasks() {
    return tasks.map(task => {
        console.log(task)
        return <>
        <Card className='grid' key={task.id} style={{ width: '18rem' }}>
          <Card.Header>{task.title}</Card.Header>
          <Card.Text>
            Details: {task.details === null ? 'None' : task.details}
            {/* {task.date} */}
          </Card.Text>
          {task.volunteers_id === null ? 
          <Button>Add to My Tasks</Button> 
          :
          <Button disabled>No Longer Available</Button> 
            }
        </Card>
        </>
    })
}
//if volunteer then gray out card : normal
//elderly- check to see if elderly_id matches? display : ignore
//id title details volunteers_id elderly_id

    return (
        <div>
            <h2> I like to volunteer</h2>

            <div className='container-fluid'>
            {displayTasks()}
            </div>
        </div>
    );
}

export default Volunteer;