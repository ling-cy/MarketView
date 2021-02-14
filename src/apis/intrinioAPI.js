import axios from 'axios';

export default axios.create({
    baseURL: 'https://api-v2.intrinio.com/securities/'
})