import axios from "axios";


axios.defaults.baseURL = "https://api.themoviedb.org/3";

const API_KEY = '739de7fbd1b92eaba75889325353e1e0';


export const fetchMovies = {

    getTrendMovies() {
        return axios.get(`trending/movie/day?api_key=${API_KEY}`)
    },

    getMoviesByQuery(query) {
        return axios.get(`search/movie?query=${query}&api_key=${API_KEY}`);
    },

    getMovieByID(id) {
        return axios.get(`movie/${id}?api_key=${API_KEY}`);
    },

    getCreditsMovie(id) {
    return axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    },

    getReviewsMovie(id) {
    return axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
     },

}