import { React, useState, useEffect }from 'react'
import NavItem from "./NavItem"
import Sidebar from './Sidebar.jsx';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
];

export default function Navbar() {
    const location = useLocation();

    const isHome = location.pathname === '/';
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll);
    })

    return (
        <nav className={`flex absolute w-full z-50 top-0 justify-between items-center transition duration-500 h-20 sm:h-16 px-6 sm:px-8 md:px-12`}>
            <div className='flex items-end gap-2'>
                <img src="/img/logo.png" alt="logo" className='w-10' />
                <h1 className='text-3xl font-poppins md:font-medium text-white'>NexCafe</h1>
            </div>
        </nav>
    )
}