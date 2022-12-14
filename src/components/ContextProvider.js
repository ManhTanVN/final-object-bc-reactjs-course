/* eslint-disable no-undef */
import { createContext, useState } from 'react';
import axios from 'axios';

export const ThemeProvider = createContext();

const ContextProvider = ({ children }) => {
    const API_URL = 'https://api.themoviedb.org/3';

    const fetchDiscover = async (link) => {
        console.log('link: ', link);
        const {
            data: { results },
        } = await axios.get(`${API_URL}${link}`, {
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
            },
        });
        return results;
    };

    const fetchSearchMovies = async (searchTerms, page = 1) => {
        const results = await axios.get(`${API_URL}/search/movie`, {
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
                query: searchTerms,
                page: page,
            },
        });
        return results;
    };

    const fetchVideos = async (id) => {
        const { data } = await axios.get(`${API_URL}/movie/${id}`, {
            params: {
                api_key: process.env.REACT_APP_MOVIE_API_KEY,
                append_to_response: 'videos',
            },
        });
        return data;
    };

    const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

    const [isShowYoutube, setIsShowYoutube] = useState(false);
    const [videoTrailer, setVideoTrailer] = useState({});

    const values = {
        fetchDiscover,
        IMAGE_PATH,
        fetchVideos,
        fetchSearchMovies,
        isShowYoutube,
        setIsShowYoutube,
        videoTrailer,
        setVideoTrailer,
    };
    return <ThemeProvider.Provider value={values}>{children}</ThemeProvider.Provider>;
};

export default ContextProvider;
