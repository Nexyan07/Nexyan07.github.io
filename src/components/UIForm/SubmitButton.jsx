export default function SubmitButton({ content }) {
    return (
        <button type="submit" className="w-full text-white bg-secondary hover:bg-secondary-dark focus:ring-4 focus:outline-none focus:ring-secondary-dark font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-colors duration-300 ease-in-out">{content}</button>
    )
}