import AnimatedContent from 'animations/AnimatedContent.jsx'

export default function Button({text, direction, reverse, delay}) {
 return (
    <AnimatedContent
        distance={100}
        direction={direction}
        reverse={reverse}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0}
        animateOpacity
        scale={1}
        threshold={0.2}
        delay={delay}
        >
        <button className='flex gap-1 items-center mt-8 px-6 py-3 border border-white text-white font-poppins md:text-xl rounded-lg hover:bg-primary active:bg-primary-dark hover:scale-105 transition cursor-pointer'>
            {text}
            <svg className="ml-2 -mr-1 w-5 md:w-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </AnimatedContent>
 )
}