import { use } from "react"
import { useRef } from "react"
import { useState } from "react"

export default function Input({ content, form, onInputChange, name, type="text", bgColor="bg-gray-50", borderColor="border-gray-300", textColor="text-gray-900" }) {
    const inputRef = useRef(null)
    const [showPasswordButton, setShowPasswordButton] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

   const handleInputChange = (e) => {
        inputRef.current.value === "" ? setShowPasswordButton(false) : setShowPasswordButton(true)
        console.log(form?.[name])
        onInputChange(e)
   }

    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">{content}</label>
            <div className="relative">
                <input ref={inputRef} value={form?.[name] || ''} onChange={handleInputChange} type={type === "text" || type === "password" && showPassword ? "text" : "password"} name={name} id={name} className={`${bgColor} border ${borderColor} ${textColor} rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`} autoComplete="off" placeholder={type === "text" ? content : "••••••••"} required />
                {(type === "password" && showPasswordButton) && (
                    <button onClick={() => setShowPassword(!showPassword)} type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" tabIndex={-1}>
                        <img src={`/img/icon/${showPassword ? "hide.png" : "show.png"}`} alt="" className="size-6"/>
                    </button>
                )}
            </div>
        </div>
    )
}