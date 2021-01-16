import React, { useCallback, useEffect, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { updateTasks} from '../api'

function Volunteer({tasks}) {

    // const [availAmount, setAvailAmount] = useState(0)
    // const [myAmount, setMyAmount] = useState(0)
    // const[refresh, setRefresh] = useState(false)
    // const prevTask = useRef(refresh)

    // console.log(refresh)
    // console.log(prevTask)
    
    //     useEffect(() => {
    //             if( prevTask.current !== refresh)
    //             displayAvailTasks()
    //             displayTakenTasks()
    //             displayMyTasks()
    //         }, [refresh]);
        
    //     const refresh = useCallback(tasks => {
    //         if(prevTasks !== tasks)
    //         displayAvailTasks()
    //         displayTakenTasks()
    //         displayMyTasks()
    //     }, [])

    function displayAvailTasks() {
        const availTasks = tasks.filter(task => task.volunteers_id === null)
        // setAvailAmount(availTasks.length)
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
        // setMyAmount(myTasks.length)
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

function addTask(e, key) {
    // console.log(e)
    // debugger
    // e.target.parentElement.remove

    updateTasks({id: key, volunteers_id: 4})
    .then(console.log)
    // setRefresh(true)
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