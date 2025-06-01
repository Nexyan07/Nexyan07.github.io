import MenuCard from '@/components/Common/MenuCard'
import { useState, useEffect, useRef } from 'react'
import SectionHeader from '@/components/common/SectionHeader'

export default function MenuList({ menus, selectedMenu, onSelectedMenu, menuType, onNext, onPrevious }) {
    // const scrollRef = useRef(null)

    // useEffect(() => {
    //     const el = scrollRef.current
    //     if (!el) return

    //     const onWheel = (e) => {
    //         const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth;

    //         const canScrollLeft = el.scrollLeft > 0;


    //         if((e.deltaY < 0 && canScrollLeft) || (e.deltaY > 0 && canScrollRight)) {
    //             e.preventDefault()
    //             el.scrollLeft += e.deltaY
    //         }
    //     }

    //     el.addEventListener("wheel", onWheel, { passive: false })
    //     return () => el.removeEventListener("wheel", onWheel)
    // }, [])

    return (
        <div className="flex flex-col lg:max-w-[calc(100%-35rem)]">

            <SectionHeader onPrevious={onPrevious} onNext={onNext} content={menuType}/>

            <div className="flex mx-2 sm:mx-8 py-4 scroll-mb-4 mb-4 gap-4 min-w-0 overflow-x-auto scroll-smooth">
                {menus.map((menu) => (
                    <MenuCard key={menu.id} menu={menu} selectedMenu={selectedMenu} onSelectedMenu={onSelectedMenu} />
                ))}
            </div>
        </div>
    )
}