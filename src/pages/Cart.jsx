import { useState, useEffect } from "react";
import Header from "../components/cart/Header";
import Background from "../components/common/Background";
import CartMenu from "../components/cart/CartMenu";
import CartSummaryBar from "../components/cart/CartSummaryBar";
import Footer from "../sections/Footer";
import CartMenuItem from "../components/cart/CartMenuItem";

const menuOnCart = [
    {
        id: 1,
        menu: "Coffee Amerikano",
        price: "25000",
        image: "amerikano.png",
        type: "coffee",
        description: "Amerikano is a type of coffee drink prepared by brewing espresso with a larger amount of hot water, giving it a similar strength to drip coffee but with a different flavor profile.",
    },
    {
        id: 2,
        menu: "Matcha Latte",
        price: "20000",
        image: "matcha-latte.png",
        type: "latte",
        description: "Matcha latte is a creamy beverage made with matcha green tea powder, steamed milk, and sweetener, offering a rich and vibrant flavor.",
    },
    {
        id: 3,
        menu: "French Fries",
        price: "10000",
        image: "french-fries.png",
        type: "snack",
        description: "French fries are deep-fried potato strips, crispy on the outside and soft on the inside, often served as a side dish or snack.",
    },
    {
        id: 4,
        menu: "Thai Tea",
        price: "28000",
        image: "thai-tea.png",
        type: "tea",
        description: "Thai Tea is a sweet and creamy iced tea made with black tea, spices, and condensed milk, known for its distinct orange color and rich taste."
    }
]

export default function Cart() {
    const menu = menuOnCart
    const [totalChecked, setTotalChecked] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const formattedTotalPrice = `Rp${totalPrice.toLocaleString('id-ID')}` // Format total price to Indonesian Rupiah
    const [selectAll, setSelectAll] = useState(false)
    const [selectAllTriggeredByUser, setSelectAllTriggeredByUser] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
            const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
            handleResize(); // Set initial state based on current window size
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    const handleCheckboxChange = (price, isChecked) => {
        setTotalChecked(prev => isChecked ? prev + 1 : prev - 1)
        setTotalPrice(prev => isChecked ? prev + price : prev - price)
    }

    const handleTotalPriceChange = (price, isIncrease) => {
        setTotalPrice(prev => isIncrease ? prev + price : prev - price)
    }

    const handleSelectAll = (e) => {
        setSelectAll(!selectAll)
        setSelectAllTriggeredByUser(true);
    }

    useEffect(() => {
        // Reset trigger setelah digunakan
        if (selectAllTriggeredByUser) {
            setSelectAllTriggeredByUser(false);
        }
    }, [selectAll]);

    useEffect(() => {
        if (totalChecked === menu.length) {
            setSelectAll(true)
        } else {
            setSelectAll(false)
        }
    }, [totalChecked])

    return (
        <div className="relative">
            <div className="absolute top-0 w-full h-full bg-primary overflow-hidden -mt-6">
                <Background image="background.png" />
            </div>
            <section >
                <div className="container relative mx-auto mt-6">
                    <div className="flex flex-col space-y-6">
                        <Header />
                        <CartMenu isMobile={isMobile}>
                            {menu.map((item) => (
                                <CartMenuItem key={item.id} isMobile={isMobile} menu={item} onCheckboxChange={handleCheckboxChange} onTotalPriceChange={handleTotalPriceChange} selectAll={selectAll} selectAllTriggeredByUser={selectAllTriggeredByUser} />
                            ))}
                        </CartMenu>
                        <CartSummaryBar isMobile={isMobile} selectAll={selectAll} onSelectAll={handleSelectAll} totalChecked={totalChecked} formattedTotalPrice={formattedTotalPrice} />
                    </div>
                </div>
            </section>
            <div className="mt-6">
                <Footer />
            </div>
        </div>
    )
}