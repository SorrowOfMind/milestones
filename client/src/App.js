import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import photo from './assets/photo.png';
import Posts from './components/posts/Posts';
import Form from './components/forms/Form';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <Container maxwidth="lg">
      <AppBar color="inherit" position="static" className={classes.appBar}>
        <Typography className={classes.heading} variant="h2" align="center">Milestones</Typography>
        <img className={classes.image} src={photo} alt="milestones" height="60"/>
      </AppBar>
      <Grow in >
        <Container>
          <Grid container spacing={3} justify="space-between" alignItems="stretch">
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
