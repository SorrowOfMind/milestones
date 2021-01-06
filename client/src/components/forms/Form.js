import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';
import {TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import {createPost, updatePost} from '../../store/actions/postActions';

const Form = () => {
    const [post, setPost] = useState({
        creator: '',
        title: '',
        message: '',
        tags: [],
        selectedFile: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const currentId = useSelector(state => state.posts.currentPost) || null;
    const currentPost = useSelector(state => currentId ? state.posts.allPosts.find(post => post._id === currentId) : null);

    useEffect(() => {
        if (currentId) setPost(currentPost);
    }, [currentId, currentPost]);
    
    const handleSubmit = e => {
        e.preventDefault();
        
        if (post.creator && post.title && post.message){
            if (currentId) dispatch(updatePost(currentId, post));
            else dispatch(createPost(post));
            clearInputs();
        }
    }

    const handleChange = e => {
        let {name, value} = e.target;

        if (name === 'tags') value = value.split(',').map(tag => tag.trim());
        
        setPost(prevPost => ({...prevPost, [name]: value}));
    }

    const clearInputs = () => setPost({
        creator: '',
        title: '',
        message: '',
        tags: [],
        selectedFile: ''
    });

    return (
        <Paper className={classes.paper}>
            <form 
                autoComplete="off" 
                noValidate 
                className={`${classes.form} ${classes.root}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">{currentId ? "Edit a milestone" : "Create a new milestone"}</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label="Creator" 
                    fullWidth
                    value={post.creator}
                    onChange={handleChange}
                />
                <TextField 
                    name="title" 
                    variant="outlined" 
                    label="Title" 
                    fullWidth
                    value={post.title}
                    onChange={handleChange}
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="Message" 
                    fullWidth
                    value={post.message}
                    onChange={handleChange}
                />
                <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="Tags" 
                    fullWidth
                    value={post.tags}
                    onChange={handleChange}
                />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPost(prevPost => ({...prevPost, selectedFile: base64}))}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Create</Button>
                <Button className={classes.buttonClear} variant="contained" size="small" onClick={clearInputs} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;
