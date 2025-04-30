import React from 'react'
import NavItem from "./NavItem"
import Sidebar from './Sidebar.jsx';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Menu', path: '/menu' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const location = useLocation();

    return (
        <nav className="flex fixed w-full z-50 justify-between items-center h-20 md:h-16 md:px-12 px-4">
            <div className='flex items-end gap-2'>
                <img src="/img/logo.png" alt="logo" className='w-10' />
                <h1 className='text-3xl font-poppins md:font-medium text-white'>NexCafe</h1>
            </div>
            <ul className='relative gap-12 hidden md:flex'>
                {navItems.map((item) => (
                    <NavLink key={item.label} to={item.path}>
                        <NavItem name={item.label} isActive={location.pathname === item.path}/>
                    </NavLink>
                ))}
            </ul>
            <div className='md:hidden'>
                <Sidebar/>
            </div>
        </nav>
    )
}