import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderSearch = () => {
    const navigate = useNavigate();
    const [searchValues, setSearchValues] = useState('');
    const handleSubmitSearch = (e) => {
        e.preventDefault();
        navigate(`/search?query=${searchValues}`);
    };
    const getSearchTerm = (e) => {
        let searchTerms = e.target.value || '';
        setSearchValues(searchTerms);
    };
    return (
        <section className="inner_content homepage-header discover flex justify-center items-center">
            <div className="container discover-container mx-auto">
                <div className="title mb-3">
                    <h2>Welcome.</h2>
                    <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
                </div>
                <div className="search">
                    <form
                        className="relative mt-3"
                        id="inner_search_form"
                        action="/search"
                        method="get"
                        acceptCharset="utf-8"
                        onSubmit={handleSubmitSearch}
                    >
                        <label>
                            <input
                                dir="auto"
                                id="inner_search_v4"
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
                        <input className="cursor-pointer" type="submit" value="Search" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HeaderSearch;
