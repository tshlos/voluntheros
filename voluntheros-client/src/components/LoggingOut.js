
function LoggingOut({logged, setLogged}) {

    function loggedOut(){
        if(logged === true){
            setLogged(false)
            return <p>Have a good day</p>
        }
    }

    return (
        <div>
      {loggedOut()}
        </div>
    );
}

export default LoggingOut;