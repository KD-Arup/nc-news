import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './componentData/sideMenuData';

import './Navbar.css'

function Navbar(props) {
  const { query, setQuery } = props;
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function handleClick(title) {
    switch (title) {
      case "Sort by votes":
        setQuery('?sort_by=votes')
        break;
      case "Sort by comments":
        setQuery('?sort_by=comment_count')
        break;
      case "Sort by date":
        setQuery('?sort_by=created_at')
        break;
    
      default:
        break;
    }
  }

  return (
    <>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <h1 className="header-text" >NC News</h1>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} 
                className={item.cName} 
                onClick={(e)=>{handleClick(item.title)}}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}

export default Navbar;