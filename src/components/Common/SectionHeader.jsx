export default function SectionHeader({ onPrevious, onNext, content }) {
    return (
        <div className='flex items-center max-sm:justify-center sm:ml-8 gap-2'>
            <img onClick={onPrevious} src="/img/assets/arrow.png" alt="" className='w-6 rotate-180 hover:scale-110' />
            <div className='min-w-[205px] sm:min-w-[248px]'>
                <h2 className="text-3xl sm:text-4xl w-full text-center font-poppins font-bold lg:font-extrabold text-[#4B6B43]">{content}</h2>
            </div>
            <img onClick={onNext} src="/img/assets/arrow.png" alt="" className='w-6 hover:scale-110' />
        </div>
    )
}