import * as FaIcons from 'react-icons/fa';

import Navbar from "./Navbar";
function Header(props) {
    const { query, setQuery } = props;
    return (
        <header className="homepage-header">
            <div className="top-bar">
                <div className="search-bar-container">
                    <div>Search</div><div>
                        <FaIcons.FaSearch />
                    </div>
                </div>
                <div className="notification-bell-and-username-container" >
                    <div className="notification-bell" >
                        <FaIcons.FaBell />
                    </div>
                    <div className="username-and-login">
                        <div className="userName" >jessjelly</div>
                        <div className="avatar-logo">
                            <FaIcons.FaUserCircle />
                        </div>
                    </div>
                </div>
            </div>
        <div className="header-text-container">
            <Navbar query={query} setQuery={setQuery}/>
        </div>
        
    </header>
    );
}

export default Header;