import { useHistory } from 'react-router-dom';

function LoggingOut({logged, setLogged}) {

    const history = useHistory() 

    function loggedOut(){
        if(logged === true){
            setLogged(false)
        }
        history.push('/')
    }

    console.log(logged)
    return (
        <div>
      {loggedOut()}
        </div>
    );
}

export default LoggingOut;