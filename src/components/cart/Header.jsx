import { NavLink } from "react-router-dom";
import MiniButton from "@/components/common/MiniButton";


export default function Header() {
    return (
        <div className="flex bg-gradient-to-br from-primary to-primary-dark z-50 rounded-lg shadow-lg relative">
            <div className="my-4 flex w-full justify-between items-center z-10 ml-6 mr-5 md:mx-8">
                <h2 className="font-poppins font-semibold md:font-bold text-white text-3xl md:text-6xl">My Cart</h2>
                <div>
                    <NavLink to="/">
                        <MiniButton content="Back to Home" icon="arrow.png" textColor="text-white" ring="ring lg:ring-2" border="lg:border-2" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}