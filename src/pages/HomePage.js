import { useEffect, useState, useContext, useRef } from 'react';
import { ThemeProvider } from '../components/ContextProvider';

import MovieCard from '../components/MovieCard';
import TrailersCard from '../components/TrailersCard';
import TrailerPopup from '../components/TrailerPopup';

import './HomePage.css';
import HeaderSearch from '../components/HeaderSearch';

const HomePage = () => {
    const { fetchDiscover } = useContext(ThemeProvider);
    const [discovers, setDiscovers] = useState([]);
    const [trailers, setTrailers] = useState([]);
    let background = useRef({});
    useEffect(() => {
        async function fetchData() {
            const discoverData = await fetchDiscover('/discover/movie');
            setDiscovers(discoverData);
            const trailerData = await fetchDiscover('/discover/movie');
            setTrailers(trailerData);
            background.current = {
                backgroundImage: `url("https://image.tmdb.org/t/p/w500${trailerData[0].backdrop_path}")`,
            };
        }
        fetchData();
    }, []);
    const changeMovieType = async (e, type, toggleClass) => {
        e.preventDefault();

        const response = await fetchDiscover(`${type}`);
        setToggleClass(toggleClass);
        setDiscovers(response);
    };
    const [toggleClass, setToggleClass] = useState('onTv');
    return (
        <div className="section-homepage">
            <TrailerPopup />
            <HeaderSearch />
            <section className=" popular-section inner_content no_pad">
                <div className="column_wrapper">
                    <div className="content_wrapper">
                        <div className="column">
                            <div className="column_header column-header">
                                <h2>What's Popular</h2>
                                <div className="selector-wrapper">
                                    <div className="selector flex">
                                        <div className={`anchor ${toggleClass === 'onTv' ? 'selected' : ''}`}>
                                            <h3>
                                                <a
                                                    onClick={(e) => changeMovieType(e, '/discover/movie', 'onTv')}
                                                    href="/"
                                                >
                                                    On TV
                                                </a>
                                            </h3>
                                            <div className={`${toggleClass === 'onTv' ? 'background' : ''} `}></div>
                                        </div>
                                        <div className={`anchor ${toggleClass === 'inTheaters' ? 'selected' : ''}`}>
                                            <h3>
                                                <a
                                                    onClick={(e) => changeMovieType(e, '/discover/tv', 'inTheaters')}
                                                    href="/"
                                                >
                                                    In Theaters
                                                </a>
                                            </h3>
                                            <div
                                                className={`${toggleClass === 'inTheaters' ? 'background' : ''} `}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column-body media-discover media discover scroller_wrap should_fade is_fading">
                                <div className="column-content-slider column_content flex scroller loaded">
                                    {discovers.map((movie) => (
                                        <MovieCard key={movie.id} cardStyle="style_1" movie={movie} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="inner_content bg_image no_pad video" style={background.current}>
                <div className="column_wrapper">
                    <div id="trailer_scroller" className="media discover scroller_wrap is_fading">
                        <div className="content_wrapper wrap no_bottom_pad">
                            <div className="column">
                                <div className="column_header">
                                    <h2>Latest Trailers</h2>
                                    <div className="selector_wrap">
                                        <div className="selector">
                                            <div className="anchor selected">
                                                <h3>
                                                    <a href="/" className="no_click">
                                                        On TV
                                                    </a>
                                                </h3>
                                                <div className="background "></div>
                                            </div>
                                            <div className="anchor">
                                                <h3>
                                                    <a href="/" className="no_click">
                                                        In Theaters
                                                    </a>
                                                </h3>
                                                <div className=" "></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column_content flex scroller loaded">
                                    {trailers.map((movie) => (
                                        <TrailersCard key={movie.id} cardStyle="style_2" movie={movie} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
