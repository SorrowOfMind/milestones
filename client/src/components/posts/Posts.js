import React from 'react';
import Post from './singlePost/Post';
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    return (
        <div>
            posts
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default Posts;
