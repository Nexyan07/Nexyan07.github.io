export default function SubmitButton({ content, bgColor = "bg-secondary", hoverBgColor = "hover:bg-secondary-dark", focusRingColor = "focus:ring-secondary-dark" }) {
    return (
        <button type="submit" className={`w-full text-white ${bgColor} ${hoverBgColor} ${focusRingColor} focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 ease-in-out`}>{content}</button>
    )
}