import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID P1LUafb9NFVPRiB4_NHUk6dtzl5DOn_4HFijQP4sSxs',
      }
});
