import axios from 'axios';

const KEY = "AIzaSyDCp5yjHI45fxO_AoaG3EGYY7pwpZsq_VI";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
