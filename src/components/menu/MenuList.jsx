import Card from '@/components/Common/Card'
import { useState, useEffect, useRef } from 'react'


export default function MenuList({ menus, selectedMenu, onSelectedMenu, menuType, onNext, onPrevious }) {
    const scrollRef = useRef(null)

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        const onWheel = (e) => {
            const canScrollRight = el.scrollLeft + el.clientWidth < el.scrollWidth;

            const canScrollLeft = el.scrollLeft > 0;


            if((e.deltaY < 0 && canScrollLeft) || (e.deltaY > 0 && canScrollRight)) {
                e.preventDefault()
                el.scrollLeft += e.deltaY
            }
        }

        el.addEventListener("wheel", onWheel, { passive: false })
        return () => el.removeEventListener("wheel", onWheel)
    }, [])

    return (
        <div className="flex flex-col lg:max-w-[calc(100%-35rem)]">
            <div className='flex items-center max-sm:justify-center sm:ml-8 gap-2'>
                <img onClick={onPrevious} src="/img/assets/arrow.png" alt="" className='w-6 rotate-180 hover:scale-110' />
                <div className='min-w-[205px] sm:min-w-[248px]'>
                    <h2 className="text-3xl sm:text-4xl w-full text-center font-poppins font-bold lg:font-extrabold text-[#4B6B43]">{menuType}</h2>
                </div>
                <img onClick={onNext} src="/img/assets/arrow.png" alt="" className='w-6 hover:scale-110' />
            </div>
            <div ref={scrollRef} className="flex mx-2 sm:mx-8 py-4 scroll-mb-4 mb-4 gap-4 min-w-0 overflow-x-auto scroll-smooth">
                {/* <div className="max-w-[600px] flex gap-4"> */}
                    {menus.map((menu) => (
                        <Card key={menu.id} menu={menu} selectedMenu={selectedMenu} onSelectedMenu={onSelectedMenu} />
                    ))}
                {/* </div> */}
            </div>
        </div>
    )
}