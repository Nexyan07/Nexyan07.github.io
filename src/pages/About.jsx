import Navbar from 'components/Navigation/Navbar.jsx';
export default function About() {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold underline">
                About
            </h1>
            <p className="text-lg">This is the about page.</p>
        </div>
    )
}