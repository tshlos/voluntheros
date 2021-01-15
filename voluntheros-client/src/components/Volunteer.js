import { Card } from 'react-bootstrap';

function Volunteer({ task }) {
    // .filter(task => task.eldery_id OR task[’eldery_id] === username)
    function displayTasks() {
         task.map(task => {
            console.log(task)
            return <>
                <Card style={{ width: '18em' }}>
                    <Card.Header>{task.title}</Card.Header>
                </Card>
            </>
        })
    }
    //if volunteer then gray out card : normal
    //elderly- check to see if elderly_id matches? display : ignore
    //id title details volunteers_id elderly_id
    return (
        <div>
            <h2></h2>
            <h3>These are my task for the day:</h3>
            {displayTasks}
        </div>
    );
}

export default Volunteer;