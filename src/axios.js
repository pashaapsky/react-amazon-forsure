import axios from 'axios';

const instance = axios.create({
    // baseURL: 'http://localhost:5001/react-b1494/us-central1/api'   // дефолтный адресс, с которым работаем (firebase clound function в этом проекте)
    baseURL: 'https://us-central1-react-cloning.cloudfunctions.net/api' // production
});

export default instance;