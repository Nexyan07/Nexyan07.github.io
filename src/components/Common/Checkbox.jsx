export default function Checkbox({ id, checked, onChange, ref }) {
    return (
        <div className="flex items-center justify-center cursor-pointer">
            <input ref={ref} onChange={onChange} checked={checked} id={id} type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-white rounded-md checked:bg-blue-500 checked:border-blue-500 relative transition-all duration-200" />
            <svg className="w-4 h-4 text-white absolute pointer-events-none ml-0.5 peer-checked:opacity-100 opacity-0 transition-opacity duration-200" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
        </div>
    )
}