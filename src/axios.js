import axios from 'axios';

// what axios.create does is whenever we make request, we can actually append
// the beginning url.
// e.g whenever we call themoviedb api, we can add the base url in the instance
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;