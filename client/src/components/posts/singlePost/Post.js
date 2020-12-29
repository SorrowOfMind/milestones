import React, {useState} from 'react';
import useStyles from './styles';
import {useDispatch} from 'react-redux';
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Post = ({post}) => {
    const [currentId, setCurrentId] = useState(post._id);
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleEditId = id => {
        try {
            dispatch({type: 'EDIT_POST_ID', payload: id});
        } catch (error) {
            console.log(error.message);
        }
    }

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
                    onClick={() => handleEditId(currentId)}
                >
                    <MoreHorizIcon fontSize="default"/>
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button coolor="primary" size="small">
                    <ThumbUpAltIcon fontSize="small"/>
                    Like {post.likeCount}
                </Button>
                <Button coolor="primary" size="small">
                    <DeleteIcon fontSize="small"/>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;
