import { useContext } from 'react';
import { ThemeProvider } from './ContextProvider';
import { Link } from 'react-router-dom';

import './GridMovieCard.css';

const GridMovieCard = ({ movie }) => {
    const { IMAGE_PATH } = useContext(ThemeProvider);
    return (
        <div className="movie-card one-small-half one-large-quarter">
            <div className="image-wrapper">
                <div className="image-inner">
                    <Link to={`/movies/${movie.id}`}>
                        <img
                            className="poster"
                            src={`${IMAGE_PATH}${movie.poster_path}`}
                            alt={movie.title}
                            srcSet={`${IMAGE_PATH}${movie.poster_path} 1x, ${IMAGE_PATH}${movie.poster_path} 2x`}
                        />
                    </Link>
                </div>
            </div>
            <div className="details">
                <div className="details-inner">
                    <p className="movie-title">{movie.title}</p>
                    <p className="movie-release">{movie.release_date}</p>
                    <p className="movie-rating">
                        <i>Rating {movie.vote_average}</i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GridMovieCard;
