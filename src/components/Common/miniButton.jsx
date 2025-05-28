export default function MiniButton({ content, icon, bgColor, ringColor, hoverColor, activeColor, textColor="text-white", ring, border="border" }) {
    return (
        <button className={`flex gap-1 lg:gap-2 items-center justify-center font-poppins sm:font-medium min-w-20 ${textColor} ${border} ${ring} ${bgColor} ${ringColor} ${hoverColor} ${activeColor} rounded-full px-2 lg:px-4 py-1.5 lg:py-2 transition-colors`}>
            {icon && <img src={`img/icon/${icon}`} alt="" className='w-4 lg:w-6' />}
            {content}
        </button>
    )
}