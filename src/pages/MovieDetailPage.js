import { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from '../components/ContextProvider';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
    const { fetchVideos } = useContext(ThemeProvider);
    const [movieDetails, setMovieDetails] = useState({});
    const [key, setKey] = useState('');
    let { id } = useParams();
    useEffect(() => {
        async function handleTrailerPopup(id) {
            const videoDetails = await fetchVideos(id);
            if (!!videoDetails) {
                setMovieDetails({ ...videoDetails });
            }
        }
        handleTrailerPopup(id);
    }, []);
    useEffect(() => {
        if (typeof movieDetails.videos !== 'undefined' && movieDetails.videos.results.length > 0) {
            const keyID = movieDetails.videos.results[0].key || '';
            setKey(keyID);
        }
    }, [movieDetails]);
    return key !== '' ? (
        <div>
            <div className="details--movie">
                <p>{movieDetails.title}</p>
                <p>{movieDetails.overview}</p>
            </div>
            <YouTube className="youtube-popup" videoId={key} />
            {/* <div onClick={handleOverlayClick} style={bgImage} className="overlay-element"></div> */}
        </div>
    ) : (
        ''
    );
};

export default MovieDetailPage;
