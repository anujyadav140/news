import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Grid,TextField,Button } from '@material-ui/core';
import axios from 'axios';

function useInput(initialValue){
    const [value,setValue] = useState(initialValue);
 
     function handleChange(e){
         setValue(e.target.value);
     }
 
    return [value,handleChange];
 }

 function Login(){
    const [username,setUsername] = useInput("");
    const [password,setPassword] = useInput("");
    const history = useHistory();
    function handleSubmit(e){
        e.preventDefault();
        const loggedin = {
            username: username,
            password: password,
        }
        axios.post('http://localhost:4000/login',loggedin).then(response => {console.log('Response:', response)
        if(response.status ===201 || response.status ===200){
            localStorage.setItem('token',response.data.Token); 
            localStorage.setItem('email',response.data.email);
            localStorage.setItem('firstname',response.data.firstName);
            localStorage.setItem('lastname',response.data.lastName);
            localStorage.setItem('username',response.data.username);
            history.push(`/Profile/${username}`);
        }
        })
        
    }
    return(
        <>
        <h1>
            Login Form:
        </h1>
        <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="row">
            <Grid item>
             <TextField type="text" label="Username"
            value={username} onChange={setUsername} required/>
            </Grid>
            <Grid item>
            <TextField type="password" label="Password"
            value={password} onChange={setPassword} required/>
            </Grid>
            <Grid item>
            <Button variant="contained" color="primary" type="submit" disabled={username.length<1||password.length<1}>Submit</Button>
            </Grid>
            </Grid>
            </form>
        </>
        )
}
export default Login
