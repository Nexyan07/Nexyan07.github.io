export default function AuthSwitcher({ content, switcher, onSwitch }) {
    return (
    <p className="text-sm font-light text-gray-200 text-center">
        {content} <span onClick={onSwitch} className="font-medium hover:underline cursor-pointer">{switcher}</span>
    </p>
    )
}