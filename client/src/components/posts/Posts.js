import React from 'react';
import Post from './singlePost/Post';
import useStyles from './styles';
import {useSelector} from 'react-redux';

const Posts = () => {
    const classes = useStyles();
    const posts = useSelector(state => state.posts);
    console.log(posts)
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
