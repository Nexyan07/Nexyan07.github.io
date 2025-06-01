export default function Select({ content, form, onInputChange, name, children }) {
    return (
        <div>
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-white">{content}</label>
            <select name={name} value={form?.[name] || ''} onChange={onInputChange} id={name} className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500">
                {children}
            </select>
        </div>
    )
}