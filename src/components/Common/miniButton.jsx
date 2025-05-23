export default function miniButton({ content, icon, bgColor, ringColor, hoverColor, activeColor }) {
    return (
        <button className={`flex gap-1 lg:gap-2 items-center justify-center font-poppins sm:font-medium min-w-20 text-white border lg:border-2 ring lg:ring-2 ${bgColor} ${ringColor} ${hoverColor} ${activeColor} rounded-full px-2 lg:px-4 lg:py-2 transition-colors`}>
            <img src={`img/icon/${icon}`} alt="cart" className='w-4 lg:w-6' />
            {content}
        </button>
    )
}