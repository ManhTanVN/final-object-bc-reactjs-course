import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider } from './ContextProvider';

const MovieCard = ({ movie, cardStyle }) => {
    const { IMAGE_PATH } = useContext(ThemeProvider);
    return (
        <div className={`card ${cardStyle}`}>
            <div className="image">
                <div className="wrapper">
                    <Link className="image" to={`/movies/${movie.id}`} title={movie.title}>
                        <img className="poster" src={`${IMAGE_PATH}${movie.poster_path}`} alt={movie.title} />
                    </Link>
                </div>
            </div>
            <div className="content">
                <div className="consensus tight">
                    <div className="outer_ring">
                        <div className="user_score_chart">
                            <div className="flex items-center justify-center percent">
                                <span className="text-white icon icon-r59">59%</span>
                            </div>
                            <canvas height="68" width="68" />
                        </div>
                    </div>
                </div>
                <h2>
                    <Link to={`/movies/${movie.id}`} title={movie.title}>
                        {movie.title}
                    </Link>
                </h2>
                <p className="">{movie.release_date}</p>
            </div>
        </div>
    );
};

export default MovieCard;
