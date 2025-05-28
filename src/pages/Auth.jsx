import Login from "@/components/auth/Login";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react"; 
import Registration from "../components/auth/Registration";

export default function Auth() {
    let [authType, setAuthType] = useState("login")

    const handleSwitchToRegistration = () => {
        setAuthType("registration")
    }

    const handleSwitchToLogin = () => {
        setAuthType("login")
    }
    
    return (
        <div className="relative">
            <NavLink key="home" to="/">
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2 hover:scale-105 transition ease-in-out duration-300">
                    <img src="/img/assets/arrow.png" alt="back" className="w-8 rotate-180" />
                    <span className="text-xl text-gray-700 font-poppins font-bold">Back to Home</span>
                </div>
            </NavLink>
            <section className="relative overflow-hidden bg-primary">

                {/* background */}
                <div className='absolute top-1/2 left-1/2 -translate-1/2 w-[160%] h-[200%] bg-[url(/img/assets/background.png)] opacity-75  -mt-9 -rotate-12'/>
                
                {authType === "login" && <Login onSwitchToRegistration={handleSwitchToRegistration}/>}
                {authType === "registration" && <Registration onSwitchToLogin={handleSwitchToLogin}/>}
            </section>
        </div>
    )
}