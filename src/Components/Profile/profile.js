import React from 'react';
import AuthService from '../../ApiServices/services';

function Profile(props){
    const [username,setusername]=React.useState(props.match.params.username);
    const [user,setUser]=React.useState(null);
    React.useEffect( ()=>{
        AuthService.Profile(username)
        .then(response => {
            console.log('Response:', response) 
        
                setUser(response.data.data);
        })
        .catch(error=>{console.log(error.response); 
           
            
        })
  
      }, []);
    return(
        <>
        <h1>Profile</h1>
        </>
    )
}
export default Profile
