import AnimatedContent from '@/animations/AnimatedContent'
import MiniButton from '@/components/common/miniButton'

export default function SelectedMenu({ selectedMenu }) {
    const isCoffee = selectedMenu.type === "coffee";
    const isTea = selectedMenu.type === "tea";
    const isSnack = selectedMenu.type === "snack";
    const isLatte = selectedMenu.type === "latte";
    const typeColor = isCoffee ? "text-[#2A1A12]" : isTea ? "text-[#141B0C]" : isSnack ? "text-[#5C3412]" : "text-[#733324]";

    return (
        <div className='lg:w-[35rem] max-lg:w-full shrink-0 flex relative lg:justify-end'>
            <div className='absolute max-lg:h-72 lg:w-[450px] overflow-hidden lg:right-0'>
                <svg className='' width="1023" height="418" viewBox="0 0 1023 418" xmlns="http://www.w3.org/2000/svg" style={{ filter: `drop-shadow(0px 6px 10px ${isCoffee ? "#2A1A12" : isTea ? "#141B0C" : isSnack ? "#5C3412" : "#733324"})` }}>
                    <polygon points="100,0 1023,0 1023,418 0,418" fill={isCoffee ? "#5C4033" : isTea ? "#283618" : isSnack ? "#bc6c25" : "#E97451"} stroke={isCoffee ? "#3E2A1F" : isTea ? "#1e2a16" : isSnack ? "#8C4F1A" : "#b54f38"} />
                </svg>
            </div>
            <div className='flex items-center gap-4 mx-2 lg:mx-0 max-lg:h-64'>
                <div className='flex w-2/5 md:w-1/3 lg:w-max items-center mt-5 lg:mt-0 h-full'>
                    {/* <AnimatedContent
                        distance={50}
                        direction="vertical"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        threshold={0.2}
                        > */}
                        <img src={`img/menu/${selectedMenu.image}`} alt="menu" className='w-full max-w-64 lg:w-64' style={{ filter: 'drop-shadow(0px 4px 8px rgba(0,0,0,0.6))' }} />
                    {/* </AnimatedContent> */}
                </div>
                <div className='h-full flex-1  flex justify-end items-center mt-5 lg:mt-0 mr-2 md:mr-8 lg:mr-4 z-10'>
                    <div className='w-full lg:mr-4 lg:w-64'>
                        <div className="flex justify-between items-center mb-0 lg:mb-1">
                            <h3 className='text-white text-2xl lg:text-3xl font-poppins font-bold max-sm:max-w-[143px]'>{selectedMenu.menu}</h3>
                            <img src={`img/icon/white-${selectedMenu.type}.png`} alt="Menu type" className={`border rounded w-7 sm:w-9 p-1 border-white`} />
                        </div>
                        <p className='text-white text-xs lg:text-lg font-poppins text-justify'>{selectedMenu.description}</p>
                        <p className='text-white font-poppins font-semibold mt-1'>Rp{selectedMenu.price}</p>
                        <div className='flex mt-2 lg:mt-4 gap-2 sm:gap-4 max-[340px]:-ml-2'>
                            <MiniButton content="Cart" icon="cart.png" bgColor="bg-[#dda15e]" ringColor="ring-[#dda15e]" hoverColor="hover:bg-[#c9873d]" activeColor="active:bg-[#bc6c25]" />
                            <MiniButton content="Order" icon="order.png" bgColor="bg-red-600" ringColor="ring-red-600" hoverColor="hover:bg-red-700" activeColor="active:bg-red-800" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}