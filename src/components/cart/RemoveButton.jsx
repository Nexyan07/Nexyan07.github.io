export default function RemoveButton() {
    return (
        <button className="flex gap-1 items-center py-1 bg-red-500 hover:bg-red-600 active:bg-red-700 border md:pr-1 w-8 md:w-auto h-8 md:h-auto rounded text-sm">
            <img src="/img/icon/remove.png" className="w-full md:w-8 p-1" />
            <span className="hidden md:block">Remove</span>
        </button>
    )
}