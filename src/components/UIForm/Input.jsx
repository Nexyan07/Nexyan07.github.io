import { useRef } from "react"
import { useState } from "react"

export default function Input({ content, name, type="text" }) {
    const inputRef = useRef(null)
    const [showPasswordButton, setShowPasswordButton] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

   const handleInputChange = () => {
        inputRef.current.value === "" ? setShowPasswordButton(false) : setShowPasswordButton(true)
   }

    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">{content}</label>
            <div className="relative">
                <input ref={inputRef} onChange={handleInputChange} type={type === "text" || type === "password" && showPassword ? "text" : "password"} name={name} id={name} className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " autoComplete="off" placeholder={type === "text" ? content : "••••••••"} required />
                {(type === "password" && showPasswordButton) && (
                    <button onClick={() => setShowPassword(!showPassword)} type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" tabIndex={-1}>
                        <img src={`/img/icon/${showPassword ? "hide.png" : "show.png"}`} alt="" className="size-6"/>
                    </button>
                )}
            </div>
        </div>
    )
}