import React, {useContext,createContext,useEffect,useState} from 'react';
import {Typography,Container} from '@material-ui/core';
import useStyles from './Style';
import FavoriteIcon from '@material-ui/icons/Favorite';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

//NewsContext
export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "eb50135447cb43bab0109f364c725004";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2021-05-19pac&sortBypublishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};


const NewsPaper=({data})=>{
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  }
  return(
    <>
    <div>
    <Container maxWidth="sm" padding={100} margin={50} >
            <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={data.title}
        subheader={data.url}
      />
      <CardMedia
        className={classes.media}
        image={data.urlToImage}
        title="Paella dish"
      />
      <CardContent >
        <Typography variant="body2" color="textSecondary" component="p">
         {data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent marginBottom='300' >
      {data.content}
        </CardContent>
      </Collapse>
    </Card>
    </Container>
   </div>
    </>
  )
;}

const News=(props)=>{
  const { data } = useContext(NewsContext);
  console.log(data);
  return (
    <div>
       <Swiper spaceBetween={30} hashNavigation={{
  "watchState": true
}} pagination={{
  "clickable": true
}} navigation={true}>
      <div>
        {data
          ? data.articles.map((news) => (
            <SwiperSlide>
              <NewsPaper data={news} key={news.url} />
              </SwiperSlide>
            ))
          : "Loading"}
      </div>
      </Swiper>
    </div>
  );
}



const Tesla=()=>{
   
  return (
    <>
    <h1>Tesla</h1>
    <NewsContextProvider>
      <News />
      </NewsContextProvider>
      </>
  );
}
export default Tesla;
