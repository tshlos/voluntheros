import { useHistory } from 'react-router-dom';

function LoggingOut({logged, setLogged}) {

    const history = useHistory() 

    function loggedOut(){
        if(logged === true){
            setLogged(false)
            return <p>Have a good day</p>
           
        }
        history.push('/login')
    }

    console.log(logged)
    return (
        <div>
      {loggedOut()}
        </div>
    );
}

export default LoggingOut;