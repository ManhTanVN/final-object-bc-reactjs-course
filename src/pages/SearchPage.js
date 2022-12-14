import React, { useEffect, useState, useContext } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ThemeProvider } from '../components/ContextProvider';
import GridMovieCard from '../components/GridMovieCard';
import './SearchPage.css';

const SearchPage = () => {
    const { fetchSearchMovies } = useContext(ThemeProvider);
    const [videoResults, setVideoResults] = useState([]);
    const [searchParams] = useSearchParams();
    const [submitSearch, setSubmitSearch] = useState('');

    useEffect(() => {
        async function fetchMovies() {
            const movies = await fetchSearchMovies(searchParams.get('query').toLocaleLowerCase());
            const {
                data: { results },
            } = movies;
            setVideoResults(results);
        }
        fetchMovies();
    }, [submitSearch]);
    const navigate = useNavigate();
    const [searchValues, setSearchValues] = useState('');
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchValues}`);
        setSubmitSearch(searchValues);
    };
    const getSearchTerm = (e) => {
        let searchTerms = e.target.value || '';
        setSearchValues(searchTerms);
    };
    return (
        <div className="container">
            <form
                className="relative my-5"
                action="/search"
                method="get"
                acceptCharset="utf-8"
                onSubmit={handleSubmitSearch}
            >
                <label>
                    <input
                        dir="auto"
                        id="inner_search_v5"
                        name="query"
                        type="text"
                        tabIndex="1"
                        autoCorrect="off"
                        autofill="off"
                        autoComplete="off"
                        spellCheck="false"
                        placeholder="Search for a movie, tv show, person......"
                        onChange={getSearchTerm}
                    />
                </label>
                <input className="cursor-pointer button-search" type="submit" value="Search" />
            </form>
            <div className="result-header-title">
                Here is the results for <i>"{searchParams.get('query')}"</i>
            </div>
            <div className="results-main">
                {videoResults.map((e) => (
                    <GridMovieCard key={e.id} movie={e} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
