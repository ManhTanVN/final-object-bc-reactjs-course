import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import './App.css';
import SearchPage from './pages/SearchPage';
import MovieDetailPage from './pages/MovieDetailPage';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="" element={<HomePage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="movies/:id" element={<MovieDetailPage />} />
                    <Route path="*" element={<div>Page not found</div>} />
                </Routes>
                <Outlet></Outlet>
            </div>
        </BrowserRouter>
    );
}

export default App;
