import { useState, useRef, useEffect } from "react"
import RemoveButton from "@/components/cart/RemoveButton"
import Checkbox from "../common/Checkbox"

export default function CardMenuItem({ isMobile, menu, onTotalPriceChange, onCheckboxChange, selectAll, selectAllTriggeredByUser }) {
    const [quantity, setQuantity] = useState(1)
    const price = parseInt(menu.price) // Convert price to integer
    let total = price * quantity // Calculate total price
    const formattedTotalPrice = `Rp${total.toLocaleString('id-ID')}` // Format price to Indonesian Rupiah
    const formattedMenuPrice = `Rp${price.toLocaleString('id-ID')}` // Format menu price to Indonesian Rupiah

    const checkboxRef = useRef(null)

    useEffect(() => {

        if (!selectAllTriggeredByUser) return;
        const isChecked = checkboxRef.current.checked;

        if (selectAll && !isChecked) {
            checkboxRef.current.checked = true
            onCheckboxChange(total, true) // Notify parent about price change
        } else if (selectAll === false && checkboxRef.current.checked === true) {
            checkboxRef.current.checked = false
            onCheckboxChange(total, false) // Notify parent about price change
        }
    }, [selectAll, selectAllTriggeredByUser])

    const handleMin = () => {
        if(quantity < 2) return
        setQuantity((prevQuantity) => prevQuantity - 1)
        if (checkboxRef.current.checked) {
            onTotalPriceChange(price, false) // Notify parent about price change
        }
    }
    
    const handlePlus = () => {
        setQuantity((prevQuantity) => prevQuantity + 1)
        if (checkboxRef.current.checked) {
            onTotalPriceChange(price, true) // Notify parent about price change
        }
    }

    return (
        <>
            {isMobile ? <MobileFormat menu={menu} checkboxRef={checkboxRef} onCheckboxChange={onCheckboxChange} total={total} formattedTotalPrice={formattedTotalPrice} quantity={quantity} onMin={handleMin} onPlus={handlePlus} /> : <TableFormat menu={menu} checkboxRef={checkboxRef} onCheckboxChange={onCheckboxChange} total={total} formattedMenuPrice={formattedMenuPrice} formattedTotalPrice={formattedTotalPrice} quantity={quantity} onMin={handleMin} onPlus={handlePlus} />}
        </>
    )
}

function TableFormat({ menu, checkboxRef, onCheckboxChange,total, formattedMenuPrice, formattedTotalPrice, quantity, onMin, onPlus }) {
    return (
        <tr className="border-t h-28">
            <td className="text-center align-middle">
                <Checkbox ref={checkboxRef} onChange={(e) => onCheckboxChange(total, e.target.checked)} />
            </td>
            <td className="align-middle">
                <div className="flex justify-center w-full">
                    <div className="w-20 bg-gray-300 rounded p-2">
                        <img src={`/img/menu/${menu.image}`} alt="menu" />
                    </div>
                </div>
            </td>
            <td className="font-poppins text-lg">{menu.menu}</td>
            <td className="text-center font-poppins text-lg">{formattedMenuPrice}</td>
            <td className="text-center font-poppins text-lg">
                <div className="flex justify-center gap-4">
                    <button onClick={onMin} className="cursor-pointer hover:scale-105">-</button>
                    <span>{quantity}</span>
                    <button onClick={onPlus} className="cursor-pointer hover:scale-105">+</button>
                </div>
            </td>
            <td className="text-center font-poppins text-lg">{formattedTotalPrice}</td>
            <td className="text-center font-poppins">
                <RemoveButton />
            </td>
        </tr>
    )
}

function MobileFormat({ menu, checkboxRef, onCheckboxChange,total, formattedTotalPrice, quantity, onMin, onPlus }) {
    return (
        <div className="flex gap-2 border-t border-gray-300 py-4 text-white mx-4">
            <div className="flex items-center justify-between w-32 gap-4">
                <Checkbox ref={checkboxRef} onChange={(e) => onCheckboxChange(total, e.target.checked)} />
                <div className="w-20 bg-gray-300 rounded p-2">
                    <img src={`/img/menu/${menu.image}`} alt="menu" />
                </div>
            </div>
            <div className="h-full w-full font-poppins">
                <div className="flex justify-between items-start">
                    <span className="text-xl max-w-[130px]">{menu.menu}</span>
                    <RemoveButton />
                </div>
                <div className="flex w-max items-center">
                    <button onClick={onMin} className="cursor-pointer border w-6">-</button>
                    <span className="w-6 border text-center">{quantity}</span>
                    <button onClick={onPlus} className="cursor-pointer border w-6">+</button>
                </div>
                <div className="flex justify-end items-center mt-2">
                    <span className="text-xl">{formattedTotalPrice}</span>
                </div>
            </div>
        </div>
    )
}