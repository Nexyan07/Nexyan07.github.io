
export default function NavItem({name, isActive}) {
    return (
      <li className={`text-white font-poppins text-xl cursor-pointer hover:text-[#e6deb8] 
        after:content-[''] after:block after:bottom-0 after:bg-[#e6deb8] after:h-[2px] after:w-full 
        after:transition-all after:duration-300 after:ease-in-out 
        ${isActive ? 'after:bg-white after:scale-x-75 hover:after:bg-[#e6deb8]' : 'after:scale-x-0'} 
        hover:after:scale-x-50`}>
        {name}
      </li>
    )
  }