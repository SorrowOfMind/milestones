import {useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import photo from './assets/photo.png';
import Posts from './components/posts/Posts';
import Form from './components/forms/Form';
import useStyles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from './store/actions/postActions';
import './index.css';

function App() {
  const currentId = useSelector(state => state.posts.currentPost) || null;
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => dispatch(getPosts()), [dispatch, currentId]);

  return (
    <Container maxwidth="lg">
      <AppBar color="inherit" position="static" className={classes.appBar}>
        <Typography className={classes.heading} variant="h3" align="center">Milestones</Typography>
        <img className={classes.image} src={photo} alt="milestones" height="50"/>
      </AppBar>
      <Grow in >
        <Container>
          <Grid className={classes.mainContainer} container spacing={3} justify="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
