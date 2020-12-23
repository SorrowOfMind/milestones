import axios from 'axios';

const ENDPOINT = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(ENDPOINT);