import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
    container: {
      maxWidth: "lg",
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8,0,6)
    },
    icon: {
        marginRight: '20px',
    },
    button: {
      background: 'linear-gradient(45deg, #7193FF 30%, #5D5CB0 90%)',
      border: '3px',
      borderRadius: 3,
      borderColor: 'black',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
  appBar: {
    top: 'auto',
    bottom: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    alignItems: 'center',
  },
  root: {
    maxWidth: 600,
    overflow: 'auto',
    top: 'auto',
    marginTop: 20,
    marginBottom: 100,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: 'red',
  },
 
}));


export default useStyles;

//            <Button variant="contained" color="primary" className={classes.button}>I am a modal</Button>
