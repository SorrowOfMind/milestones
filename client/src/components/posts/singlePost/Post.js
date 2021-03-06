import React from 'react';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import {deletePost, likePost} from '../../../store/actions/postActions';

const Post = ({post}) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleEditId = id => {
        try {
            dispatch({type: 'EDIT_POST_ID', payload: id});
        } catch (error) {
            console.log(error.message);
        }
    }

    const handleDelete = id => dispatch(deletePost(id));
    const handleLike = id => dispatch(likePost(id));

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button 
                    style={{color: 'white'}} 
                    size="small"
                    onClick={() => handleEditId(post._id)}
                >
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <Typography className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button coolor="primary" size="small" onClick={() => handleLike(post._id)}>
                    <ThumbUpAltIcon fontSize="small"/>
                    &nbsp; Like {post.likeCount}
                </Button>
                <Button coolor="primary" size="small" onClick={() => handleDelete(post._id)}>
                    <DeleteIcon fontSize="small"/>
                    &nbsp; Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;
