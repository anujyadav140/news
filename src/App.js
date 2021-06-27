//import logo from './logo.svg';
import './App.css';
import React  from 'react';
import {Typography,AppBar,CssBaseline,Toolbar,Box} from '@material-ui/core';
import useStyles from './Components/News_Service/Style';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Tesla from './Components/News_Service/Tesla'; 
import Sports from './Components/News_Service/Sports';
import Finance from './Components/News_Service/Finance';
import Politics from './Components/News_Service/Politics';
import Entertainment from './Components/News_Service/Entertainment';
import Videogames from './Components/News_Service/Videogames';
import Diplomacy from './Components/News_Service/Diplomacy';
import signup from './Components/Signup/signup';
import login from './Components/Login/login';
import Profile from './Components/Profile/profile';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

const App = () => {
  const classes = useStyles();
  
    const [value, setValue] = React.useState(0);
    const routes = ["/Tesla","/Sports","/Finance","/Politics","/Entertainment","/Videogames","/Diplomacy","/signup","/login","/Profile"]
    const handleChange = (event, newValue) => {
      setValue(newValue);
  };
  

  return (
    <>
    <div className="App">
    <CssBaseline />
          <AppBar position="relative">
            <Toolbar>
            <AcUnitIcon className={classes.icon} />
            <Typography variant="h6">
              Arete News
            </Typography>
            </Toolbar>
          </AppBar>
          <div>
          <BrowserRouter>
          <Route path="/" render={(history) => (
              <AppBar position="fixed" color="primary" className={classes.appBar}>
              <Box
          sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
          <Tabs
            orientation="horizontal"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            sx={{ borderRight: 1, borderColor: 'divider' }}
            value={history.location.pathname !== '/'? history.location.pathname:false}
          >
            <Tab icon={<PhoneIcon />}  label="Tesla" value={routes[0]} component={Link} to={routes[0]} />
            <Tab icon={<FavoriteIcon />} label="Sports" value={routes[1]} component={Link} to={routes[1]} />
            <Tab icon={<PersonPinIcon />} label="Finance" value={routes[2]} component={Link} to={routes[2]} />
            <Tab icon={<HelpIcon />} label="Politics" value={routes[3]} component={Link} to={routes[3]}  />
            <Tab icon={<ShoppingBasket />} label="Entertainment" value={routes[4]} component={Link} to={routes[4]} />
            <Tab icon={<ThumbDown />} label="Video Games" value={routes[5]} component={Link} to={routes[5]} />
            <Tab icon={<ThumbUp />} label="Diplomacy" value={routes[6]} component={Link} to={routes[6]} />
            <Tab icon={<PersonPinIcon />} label="Sign up" value={routes[7]} component={Link} to={routes[7]} />
            <Tab icon={<PersonPinIcon />} label="Log in" value={routes[8]} component={Link} to={routes[8]} />
            <Tab icon={<PersonPinIcon />} label="Profile" value={routes[9]} component={Link} to={routes[9]} />
          </Tabs>
        </Box>
        </AppBar>
          )}/>
    <Switch>
      <Route path="/Tesla" component={Tesla}  />
      <Route path="/Sports" component={Sports} />
      <Route path="/Finance" component={Finance} />
      <Route path="/Politics" component={Politics} />
      <Route path="/Entertainment" component={Entertainment} />
      <Route path="/Videogames" component={Videogames} />
      <Route path="/Diplomacy" component={Diplomacy} />
      <Route path="/signup" component={signup} />
      <Route path="/login" component={login} />
      <Route path="/Profile/:username" render={props=>
      <Profile key={props.location.pathname} {...props} />
      } 
      />
    </Switch>
  </BrowserRouter>
    </div>
    </div>
    </>
  );
}

export default App;
