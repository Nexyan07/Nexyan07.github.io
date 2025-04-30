import { useState } from 'react'
import SidebarItem from './SidebarItem.jsx';
import { NavLink, useLocation } from 'react-router-dom';

const sidebarItems = [
    { label: 'Home', path: '/', icon: 'src/assets/home.png' },
    { label: 'Menu', path: '/menu', icon: 'src/assets/menu.png' },
    { label: 'Gallery', path: '/gallery', icon: 'src/assets/galery.png' },
    { label: 'About', path: '/about', icon: 'src/assets/about.png' },
    { label: 'Contact', path: '/contact', icon: 'src/assets/contact.png' },
];

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    return (
        <div>
            <div className={`fixed inset-0 bg-black/50 ${isSidebarOpen ? 'block' : 'hidden'}`}/>
            <div className={`fixed top-0 w-4/5 h-full right-0 flex items-start ${isSidebarOpen ? 'translate-x-0' : 'translate-x-[calc(100%-4rem)]'} transition-transform duration-300 ease-in-out`}>
                <button onClick={toggleSidebar} className={`right-4 py-5 px-5 text-white hover:text-primary text-3xl hover:scale-105 ${isSidebarOpen ? '-translate-x-[calc(1/2vw)] opacity-0' : 'translate-x-0 opacity-100'} transition duration-300 ease-in-out`}>
                    ☰
                </button>
                <div className='w-full h-full bg-black/80 border-l border-white text-white shadow-lg'>
                    <div className='flex justify-between px-4 border-b border-white items-center h-20'>
                        <div className='flex items-center gap-2'>
                            <img src="/img/logo.png" alt="logo" className='w-8' />
                            <div className='text-2xl font-poppins font- text-white'>NexCafe</div>
                        </div>
                        <button onClick={toggleSidebar} className='cursor-pointer text-2xl font-poppins font-bold text-white hover:text-primary hover:scale-110 transition-all'>✖</button>
                    </div>
                    <ul className="mt-4 space-y-3">
                        {sidebarItems.map((item) => (
                            <NavLink key={item.label} to={item.path} onClick={toggleSidebar}>
                                <SidebarItem name={item.label} icon={item.icon} isActive={location.pathname === item.path}/>
                            </NavLink>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}