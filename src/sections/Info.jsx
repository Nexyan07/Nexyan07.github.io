import { useState } from "react"
import SectionHeader from '@/components/common/SectionHeader'
import About from '@/components/infoSections/About'
import Testimonials from "../components/infoSections/Testimonials"
import Location from'@/components/infoSections/Location'
import Contact from'@/components/infoSections/Contact'

export default function Info() {
    const infoType = ["About Us", "Testimonials", "Location", "Contact"]
    const [index, setIndex] = useState(0)

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % infoType.length)
    }

    const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex - 1 + infoType.length) % infoType.length)
    }

    return (
        <div className="relative overflow-hidden py-8">

            <div className='absolute top-1/2 left-1/2 -translate-1/2 w-[140%] h-[200%] bg-[url(/img/assets/background.png)] opacity-75 -mt-9 -z-10 -rotate-12'/>

            <SectionHeader onPrevious={handlePrevious} onNext={handleNext} content={infoType[index]}/>
            
            {infoType[index] === "About Us" && <About />}
            {infoType[index] === "Testimonials" && <Testimonials />}
            {infoType[index] === "Location" && <Location />}
            {infoType[index] === "Contact" && <Contact />}
        </div>
    )
}