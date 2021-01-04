import axios from 'axios';

const ENDPOINT = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(ENDPOINT);
export const createPost = (newPost) => axios.post(ENDPOINT, newPost);
export const editPost = (id, editedPost) => axios.patch(`${ENDPOINT}/${id}`, editedPost);
export const deletePost = id => axios.delete(`${ENDPOINT}/${id}`);