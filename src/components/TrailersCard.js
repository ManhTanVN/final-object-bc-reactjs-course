import { useContext } from 'react';
import { ThemeProvider } from './ContextProvider';
import playIcon from '../media/playIcon.svg';

const TrailersCard = ({ movie, cardStyle }) => {
    const { IMAGE_PATH, fetchVideos, setIsShowYoutube, videoTrailer, setVideoTrailer } = useContext(ThemeProvider);
    const backgroundImage = {
        backgroundImage: `url("${playIcon}")`,
    };
    const handleTrailerPopup = async (e) => {
        e.preventDefault();
        const videos = await fetchVideos(movie.id);
        if (!!videos) {
            setVideoTrailer({ ...videos });
            setIsShowYoutube(true);
        }
    };
    return (
        <div className={`card video ${typeof cardStyle == 'string' ? cardStyle : ''} true`}>
            <div onClick={handleTrailerPopup} className="image">
                <div className="wrapper">
                    <a
                        className="image play_trailer"
                        data-id="0jYEPCBWhJY"
                        data-title="This Season on Yellowstone"
                        href="/tv/73586"
                        title={movie.name}
                    >
                        <img
                            loading="lazy"
                            className="backdrop"
                            src={`${IMAGE_PATH}${movie.backdrop_path}`}
                            srcSet={`${IMAGE_PATH}${movie.backdrop_path} 1x, ${IMAGE_PATH}${movie.backdrop_path} 2x`}
                            alt=""
                        />

                        <div className="play">
                            <span
                                className="back-ground-play-icon glyphicons_v2 play invert svg"
                                style={backgroundImage}
                            ></span>
                        </div>
                    </a>
                </div>

                <div
                    className="options"
                    data-id="73586"
                    data-object-id="59a5dfc3c3a368403b0136f7"
                    data-media-type="tv"
                    data-role="tooltip"
                >
                    <a className="no_click" href="#">
                        <div className="glyphicons_v2 circle-more white"></div>
                    </a>
                </div>
            </div>
            <div className="content">
                <h2>
                    <a onClick={handleTrailerPopup} href="/tv/73586" title="Yellowstone">
                        {movie.name}
                    </a>
                </h2>
                <h3>Average Rating {movie.vote_average}/10</h3>
            </div>
        </div>
    );
};

export default TrailersCard;
