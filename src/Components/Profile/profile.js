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
      let userName,firstname,lastname,email = "";
        if(user!==null)
        {
            userName = user.username;
            firstname = user.firstName;
            lastname = user.lastName;
            email = user.email;
        }
    return(
        <>
        <h1>Profile</h1>
        <h3>username:{userName}</h3>
        <h3>first name:{firstname}</h3>
        <h3>last name:{lastname}</h3>
        <h3>email:{email}</h3>
        </>
    )
}
export default Profile
