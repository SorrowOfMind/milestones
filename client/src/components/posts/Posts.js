import React from 'react';
import Post from './singlePost/Post';
import useStyles from './styles';
import {useSelector} from 'react-redux';
import {Grid, CircularProgress} from '@material-ui/core';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector(state => state.posts.allPosts);
    
    return (
        !posts.length ? <CircularProgress/> : (
            <Grid className={classes.container} container align-items="stretch" spacing={3}>
                {posts.map(post => (
                    <Grid item key={post._id} xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default Posts;
