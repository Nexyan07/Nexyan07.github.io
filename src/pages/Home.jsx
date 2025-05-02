import Navbar from 'components/Navigation/Navbar.jsx';
import Hero from '@/sections/Hero.jsx';
// import PupularMenu from 'components/Menu/PupularMenu.jsx';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            {/* <PupularMenu /> */}
        </div>
    )
}