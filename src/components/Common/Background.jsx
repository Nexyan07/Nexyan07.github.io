export default function Background({image}) {
    return <div className={`absolute top-1/2 left-1/2 -translate-1/2 w-[160%] h-[200%] bg-[url(/img/assets/${image})] opacity-75 -mt-9 -rotate-12`}/>
}