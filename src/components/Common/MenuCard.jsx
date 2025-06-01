import { useState, useEffect, useRef } from 'react';
import DashedLine from '@/components/common/DashedLine.jsx';

export default function MenuCard({ menu, selectedMenu, onSelectedMenu }) {
    const [isHovered, setIsHovered] = useState(false);
    const isCoffee = menu.type === "coffee";
    const isTea = menu.type === "tea";
    const isSnack = menu.type === "snack";
    const typeColor = isCoffee ? "text-[#2A1A12]" : isTea ? "text-[#141B0C]" : isSnack ? "text-[#5C3412]" : "text-[#733324]";
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(menu.price);

    const heading = useRef(null);
    const [isShortText, setIsShortText] = useState(false);

    useEffect(() => {
        if(heading.current.textContent.length < 15) {
            setIsShortText(true);
        }
    })

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => onSelectedMenu(menu.id)}
          className={`relative overflow-hidden flex flex-col border rounded w-40 lg:w-52 flex-none shadow-lg group ${isCoffee ? "hover:bg-[#704C3A] border-[#3E2A1F] hover:shadow-[#2A1A12]" : isTea ? "hover:bg-[#3A4A1F] border-[#1e2a16] hover:shadow-[#141B0C]" : isSnack ? "hover:bg-[#D17A28] border-[#8C4F1A] hover:shadow-[#5C3412]" : "hover:bg-[#F28A67] border-[#b54f38] hover:shadow-[#733324]" } hover:scale-105 transition duration-300 ease-in-out ${selectedMenu.id === menu.id ? isCoffee ? "bg-[#5C4033] shadow-[#2A1A12]" : isTea ? "bg-primary-dark shadow-[#141B0C]" : isSnack ? "bg-secondary-dark shadow-[#5C3412]" : "bg-[#E97451] shadow-[#733324]" : "bg-white  shadow-black"}`}>
            {["mt-4", "mt-28", "mt-52", "mt-76"].map((mtop, index) => (
                <DashedLine
                    key={index}
                    color={isHovered || selectedMenu.id === menu.id ? "#ffffff" : isCoffee ? "#704C3A" : isTea ? "#3A4A1F" : isSnack ? "#D17A28" : "#F28A67"}
                    mtop={mtop}
                    isHovered={isHovered}
                    direction={index % 2 === 0 ? "left" : "right"}
                    selectedMenuId={selectedMenu.id}
                    menuId={menu.id}
                />
            ))}

            <div className="py-4">
                <div className="flex justify-center h-28 lg:h-52 bg-pink-5 items-center">
                    <img src={`img/menu/${menu.image}`} alt={menu.menu} className="h-28 lg:h-40 z-10" />
                </div>
                <div className="flex h-16 justify-between items-center px-2 lg:px-4">
                    <h3 ref={heading} className={`lg:text-2xl ${isShortText ? "text-xl" : ""} group-hover:text-white font-poppins z-10 font-semibold max-w-[110px] lg:max-w-[140px] break-words ${selectedMenu.id === menu.id ? "text-white" : typeColor}`}>{menu.menu}</h3>
                    <img src={isHovered || selectedMenu.id === menu.id ? `img/icon/white-${menu.type}.png` : `img/icon/${menu.type}.png`} alt="Menu type" className={`border ${typeColor} rounded w-8 h-8 p-1 group-hover:border-white z-10 ${selectedMenu.id === menu.id ? "border-white" : ""}`} />
                </div>
                <p className={`px-2 lg:px-4 group-hover:text-white font-poppins z-50 font-semibold ${selectedMenu.id === menu.id ? "text-white" : typeColor}`}>{formattedPrice}</p>
            </div>
        </div>
    )
}