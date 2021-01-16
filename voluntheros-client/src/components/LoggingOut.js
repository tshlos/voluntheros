import React from 'react';
import { loggedOut } from '../api';

function LoggingOut() {

    useEffect(() => {
        logged()
          .then(json => setTasks(json))
      }, []);
    
    return (
        <div>
            
        </div>
    );
}

export default LoggingOut;