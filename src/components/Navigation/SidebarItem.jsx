import SplitText from "animations/SplitText";

export default function SidebarItem({ name, icon, onClick, isActive }) {
    return (
        <li className={`px-4 py-3 hover:bg-primary ${isActive ? 'bg-primary/80 border border-white' : ''} hover:scale-105 hover:border hover border-white active:bg-primary-dark rounded transition-transform cursor-pointer font-poppins flex gap-2`} onClick={onClick}>
            {icon && <img src={icon} className="mr-2 w-6" />}
            <SplitText text={name} delay={25} className="text-white font-poppins font-medium" />
        </li>
    );
}