import React,{useState} from 'react';
import { Grid,TextField,Button } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function useInput(initialValue){
    const [value,setValue] = useState(initialValue);
 
     function handleChange(e){
         setValue(e.target.value);
     }
 
    return [value,handleChange];
 }

function Signup() {
    const [firstName,setfname] = useInput("");
    const [lastName,setlname] = useInput("");
    const [username,setUsername] = useInput("");
    const [email,setEmail] = useInput("");
    const [password,setPassword] = useInput("");
    const history = useHistory();

function handleSubmit(e){
    e.preventDefault();
      const registered = {
        firstName: firstName,
        lastName: lastName,
        username: username,
        email: email,
        password: password,
      };
      axios.post('http://localhost:4000/signup',registered).then(console.log("successfull post!"))
      history.push("/login");
}
    return(
        <>
        <h1>
            Signup Form:
        </h1>
        <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column">
            <Grid item>
            <TextField type="text" label="First Name"
            value={firstName} onChange={setfname} required/>
            </Grid>
            <Grid item>
            <TextField type="text" label="Last Name"
            value={lastName} onChange={setlname} required/>
            </Grid>
            <Grid item>
             <TextField type="text" label="Username"
            value={username} onChange={setUsername} required/>
            </Grid>
            <Grid item>
            <TextField type="email" label="Email"
            value={email} onChange={setEmail} required/>
            </Grid>
            <Grid item>
            <TextField type="password" label="Password"
            value={password} onChange={setPassword} required/>
            </Grid>
            <Grid item>
            <Button variant="contained" color="primary" type="submit" disabled={firstName.length<1||lastName.length<1||username.length<1||email.length<1||password.length<1}>Submit</Button>
            </Grid>
            </Grid>
            </form>
        </>
        )
}
export default Signup