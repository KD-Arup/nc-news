function Header() {
    return (
        <header className="homepage-header">
            <div className="top-bar">
                <div className="search-bar-container">
                    <div>Search</div><div>mag-glass</div>
                </div>
                <div className="notification-bell-and-username-container" >
                    <div className="notification-bell" >bell</div>
                    <div className="username-and-login">
                        <div className="userName" >Joe Blogs</div>
                        <div className="avatar-logo">pic</div>
                    </div>
                </div>
            </div>
        <div className="header-text-container">
            <h1 className="header-text" >NC News</h1>
            <button className="header-menu-button">=</button>
        </div>
        
    </header>
    );
}

export default Header;