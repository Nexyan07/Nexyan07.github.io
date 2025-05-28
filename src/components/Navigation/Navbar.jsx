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
        <nav className={`flex fixed w-full z-50 top-0 justify-between items-center ${isHome && !scrolled ? '' : 'bg-primary border-b-2 border-primary-dark'} transition duration-500 h-20 sm:h-16 px-8 sm:px-12`}>
            <div className='flex items-end gap-2'>
                <img src="/img/logo.png" alt="logo" className='w-10' />
                <h1 className='text-3xl font-poppins md:font-medium text-white'>NexCafe</h1>
            </div>
            <div className='flex justify-between gap-20 flex-row-reverse'>
                <NavLink to="/cart">
                    <img src="/img/icon/cart.png" alt="" className='w-7 hover:scale-105'/>
                </NavLink>
                <ul className='relative gap-12 hidden md:flex'>
                    {navItems.map((item) => (
                        <NavLink key={item.label} to={item.path}>
                            <NavItem name={item.label} isActive={location.pathname === item.path}/>
                        </NavLink>
                    ))}
                </ul>
            </div>
            <div className='md:hidden'>
                <Sidebar/>
            </div>
        </nav>
    )
}