import SplitText from "animations/SplitText";
import Button from 'components/common/Button.jsx'
import HeroLarge from '/img/hero-large.png';
import HeroMobile from '/img/hero-mobile.png';
import HeroDefault from '/img/hero-default.png';

export default function Banner() {
    return (
        <div className="h-[100lvh] overflow-hidden relative">
            <picture>
                <source srcSet={HeroLarge} media="(min-width: 1024px)" />
                <source srcSet={HeroMobile} media="(max-width: 768px)" />
                <img src={HeroDefault} alt="Background" className="absolute left-0 bottom-0 w-full h-full object-cover object-bottom-left" />
            </picture>
            <div className='relative flex flex-col items-center justify-center h-full bg-black/50'>
                <SplitText
                    text="Welcome to NexCafe"
                    className="text-[2.75rem] md:text-7xl font-poppins font-semibold leading-[1.1] text-white"
                    delay={25}
                    highlightWordStyles={{ NexCafe: { color: '#606c38', WebkitTextStroke: '1px #fefae0', scale: '105%' } }}
                />
                <SplitText
                    text="A tasteful escape for refined flavors and relaxed moments."
                    className="text-xl md:text-2xl font-poppins text-white mt-4"
                    delay={10}
                />
                <Button text="Explore Menu" direction="horizontal" reverse={true} delay={450}/>
            </div>
        </div>
    )
}