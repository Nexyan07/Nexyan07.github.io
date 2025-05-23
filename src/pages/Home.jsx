import Navbar from '@/components/Navigation/Navbar.jsx';
import Hero from '@/sections/Hero.jsx';
import Menu from '@/sections/Menu.jsx';
import Gallery from '@/sections/Gallery'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Menu />
            <Gallery />
        </div>
    )
}