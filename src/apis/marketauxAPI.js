import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.marketaux.com/v1/'
})