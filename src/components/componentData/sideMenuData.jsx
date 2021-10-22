import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Sort by votes',
    path: '/',
    icon: <AiIcons.AiOutlineLike />,
    cName: 'nav-text'
  },
  {
    title: 'Sort by comments',
    path: '/',
    icon: <FaIcons.FaComments />,
    cName: 'nav-text'
  },
  {
    title: 'Sort by date',
    path: '/',
    icon: <FaIcons.FaCalendarAlt />,
    cName: 'nav-text'
  },
];