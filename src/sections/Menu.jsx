import { useState, useRef, useEffect } from 'react';
import MenuList from '@/components/menu/MenuList'
import MenuDetail from '@/components/menu/MenuDetail'

const recomendedMenu = [
    {
        id: 1,
        menu: "Coffee Amerikano",
        price: "25.000",
        image: "amerikano.png",
        type: "coffee",
        description: "Amerikano is a type of coffee drink prepared by brewing espresso with a larger amount of hot water, giving it a similar strength to drip coffee but with a different flavor profile.",
    },
    {
        id: 2,
        menu: "Matcha Latte",
        price: "20.000",
        image: "matcha-latte.png",
        type: "latte",
        description: "Matcha latte is a creamy beverage made with matcha green tea powder, steamed milk, and sweetener, offering a rich and vibrant flavor.",
    },
    {
        id: 3,
        menu: "French Fries",
        price: "10.000",
        image: "french-fries.png",
        type: "snack",
        description: "French fries are deep-fried potato strips, crispy on the outside and soft on the inside, often served as a side dish or snack.",
    },
    {
        id: 4,
        menu: "Thai Tea",
        price: "28.000",
        image: "thai-tea.png",
        type: "tea",
        description: "Thai Tea is a sweet and creamy iced tea made with black tea, spices, and condensed milk, known for its distinct orange color and rich taste."
    }
]

const coffeeMenu = [
    {
        id: 1,
        menu: "Black Coffee",
        price: "20.000",
        image: "black-coffee.png",
        type: "coffee",
        description: "Black Coffee is a simple and bold coffee drink made without milk or sugar, offering the pure taste of brewed coffee."
    },
    {
        id: 2,
        menu: "Cappuccino",
        price: "30.000",
        image: "cappuccino.png",
        type: "coffee",
        description: "Cappuccino is a popular espresso-based coffee drink that combines equal parts of espresso, steamed milk, and milk foam, creating a rich and creamy flavor."
    },
    {
        id: 3,
        menu: "Espresso",
        price: "22.000",
        image: "espresso.png",
        type: "coffee",
        description: "Espresso is a strong and concentrated coffee made by forcing hot water through finely-ground coffee beans under pressure, served in small amounts."
    },
    {
        id: 4,
        menu: "Palm Sugar",
        price: "28.000",
        image: "palm-sugar-coffee.png",
        type: "coffee",
        description: "Palm Sugar Coffee is a unique blend of brewed coffee sweetened with traditional palm sugar, offering a rich, caramel-like taste with natural sweetness."
    },
    {
        id: 5,
        menu: "Coffee Amerikano",
        price: "25.000",
        image: "amerikano.png",
        type: "coffee",
        description: "Amerikano is a type of coffee drink prepared by brewing espresso with a larger amount of hot water, giving it a similar strength to drip coffee but with a different flavor profile.",
    }
]

const teaMenu = [
    {
        id: 1,
        menu: "Black Tea",
        price: "18.000",
        image: "black-tea.png",
        type: "tea",
        description: "Black Tea is a fully oxidized tea with a bold, robust flavor and a dark amber color, often enjoyed plain or with a slice of lemon."
    },
    {
        id: 2,
        menu: "Green Tea",
        price: "32.000",
        image: "green-tea.png",
        type: "tea",
        description: "Green Tea is a lightly oxidized tea known for its fresh, grassy flavor and vibrant green color, often enjoyed hot or iced."
    },
    {
        id: 3,
        menu: "Strawberry Tea",
        price: "25.000",
        image: "strawberry-tea.png",
        type: "tea",
        description: "Strawberry Tea is a fruity infusion made with black or green tea and natural strawberry flavor, resulting in a refreshing and sweet beverage."
    },
    {
        id: 4,
        menu: "Thai Tea",
        price: "28.000",
        image: "thai-tea.png",
        type: "tea",
        description: "Thai Tea is a sweet and creamy iced tea made with black tea, spices, and condensed milk, known for its distinct orange color and rich taste."
    }
]

const snackMenu = [
    {
        id: 1,
        menu: "French Fries",
        price: "22.000",
        image: "french-fries.png",
        type: "snack",
        description: "French Fries are thinly sliced potatoes deep-fried until crispy and golden, typically served with ketchup or dipping sauces."
    },
    {
        id: 2,
        menu: "Toast",
        price: "18.000",
        image: "toast.png",
        type: "snack",
        description: "Toast is a simple and crunchy snack made by grilling or toasting slices of bread, often topped with butter, jam, or spreads."
    },
    {
        id: 3,
        menu: "Waffle",
        price: "26.000",
        image: "waffle.png",
        type: "snack",
        description: "Waffle is a light and crisp cake cooked between patterned plates, usually served with syrup, fruit, or whipped cream."
    },
    {
        id: 4,
        menu: "Banana Nuggets",
        price: "8.000",
        image: "banana-nuggets.png",
        type: "snack",
        description: "Banana nuggets are bite-sized snacks made from mashed bananas that are coated in breadcrumbs and then deep-fried or baked until golden and crispy.",
    }
]

const latteMenu = [
    {
        id: 1,
        menu: "Chocolate Latte",
        price: "30.000",
        image: "chocolate-latte.png",
        type: "latte",
        description: "Chocolate Latte is a creamy and rich beverage made with steamed milk and chocolate, offering a comforting and sweet flavor."
    },
    {
        id: 2,
        menu: "Red Velvet Latte",
        price: "32.000",
        image: "red-velvet-latte.png",
        type: "latte",
        description: "Red Velvet Latte combines the smooth texture of steamed milk with red velvet flavoring, resulting in a sweet and velvety drink with a vibrant color."
    },
    {
        id: 3,
        menu: "Taro Latte",
        price: "30.000",
        image: "taro-latte.png",
        type: "latte",
        description: "Taro Latte is a popular milk-based drink made from taro root, offering a naturally sweet and nutty flavor with a signature purple hue."
    },
    {
        id: 4,
        menu: "Vanilla Latte",
        price: "30.000",
        image: "vanilla-latte.png",
        type: "latte",
        description: "Vanilla Latte blends the smoothness of steamed milk with the sweet, floral notes of vanilla, creating a warm and inviting drink."
    },
    {
        id: 5,
        menu: "Matcha Latte",
        price: "32.000",
        image: "matcha-latte.png",
        type: "latte",
        description: "Matcha Latte is a creamy beverage made from finely ground green tea powder whisked with milk, offering a smooth, earthy flavor and vibrant green color."
    },
    {
        id: 6,
        menu: "Coffee Latte",
        price: "32.000",
        image: "coffee-latte.png",
        type: "latte",
        description: "Coffee Latte is a classic espresso-based drink made with steamed milk and a light layer of foam, offering a smooth balance of bold coffee and creamy texture."
    }
]

export default function PopularMenu() {
    const [menus, setMenus] = useState(recomendedMenu);
    const [selectedMenu, setSelectedMenu] = useState(menus[0]);
    const menuTypes = ["Recomended", "Coffee", "Latte", "Tea", "Snack"]
    const [index, setIndex] = useState(0)

    function handleMenuType() {
        if (menuTypes[index] === "Recomended") {
            setMenus(recomendedMenu)
        } else if (menuTypes[index] === "Coffee") {
            setMenus(coffeeMenu)
        } else if (menuTypes[index] === "Snack") {
            setMenus(snackMenu)
        } else if (menuTypes[index] === "Latte") {
            setMenus(latteMenu)
        } else if (menuTypes[index] === "Tea") {
            setMenus(teaMenu)
        }
    }

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % menuTypes.length)
    }

    const handlePrevious = () => {
        setIndex((prevIndex) => (prevIndex - 1 + menuTypes.length) % menuTypes.length)
    }

    function handleSelectedMenu(id) {
        const newMenu = menus.filter((menu) => menu.id === id);
        setSelectedMenu(newMenu[0]);
    }

    useEffect(() => {
        handleMenuType()
    }, [index])
    
    useEffect(() => {
        setSelectedMenu(menus[0])
    },[menus])

    return (
        <div id='menu' className='flex flex-col lg:flex-row w-full justify-between relative overflow-hidden pt-6 pb-12 lg:py-12 lg:gap-4'>

            {/* background */}
            <div className='absolute top-1/2 left-1/2 -translate-1/2 w-[140%] h-[200%] bg-[url(/img/assets/background.png)] opacity-75 -mt-9 -z-10 -rotate-12'/>

            <MenuList menus={menus} selectedMenu={selectedMenu} onSelectedMenu={handleSelectedMenu} menuType={menuTypes[index]} onNext={handleNext} onPrevious={handlePrevious}/>
            <MenuDetail selectedMenu={selectedMenu} />
        </div>
    )
}