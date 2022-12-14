import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../logo.svg';
import { FaBell } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { FaUserAstronaut } from 'react-icons/fa';
const Header = () => (
    <div className="upper-header text-white">
        <div className="mx-auto container flex items-center justify-between">
            <div className="flex items-center">
                <div className="cursor-pointer">
                    <Link to="/">
                        <img src={logo} className="App-logo" alt="The Movie Database (TMDB)" width="154" height="20" />
                    </Link>
                </div>
                <ul className="flex ">
                    <li className="p-1 m-1 cursor-pointer">
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                    <li className="p-1 m-1 cursor-pointer">
                        <NavLink to="/tv-show">TV Shows</NavLink>
                    </li>
                    <li className="p-1 m-1 cursor-pointer">
                        <NavLink to="/people">People</NavLink>
                    </li>
                    <li className="p-1 m-1 cursor-pointer">
                        <NavLink to="/more">More</NavLink>
                    </li>
                </ul>
            </div>
            <ul className="flex items-center">
                <li className="ml-3 header-language-icon p-1 m-1 cursor-pointer border-white border rounded">EN</li>
                <li className="ml-3 p-1 m-1 cursor-pointer">
                    <FaBell size="19px" />
                </li>
                <li className="ml-3 p-1 m-1 cursor-pointer">
                    <FaUserAstronaut size="19px" />
                </li>
                <li className="ml-3 p-1 m-1 cursor-pointer">
                    <BiSearch width="24px" size="24px" />
                </li>
            </ul>
        </div>
    </div>
);

export default Header;
