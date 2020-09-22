import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://us-central1-clone-c2803.cloudfunctions.net/api',
  //http://localhost:5001/clone-c2803/us-central1/api
});

export default instance;
