
export default function DashedLine({ mtop, color, rotate="-rotate-12", isHovered, direction, selectedMenuId, menuId }) {
    return (
        <div
            className={`absolute w-[300%] -left-28 h-[10px] ${rotate} ${mtop} z-0 transition duration-300 ease-in-out`}
            style={{ background: `repeating-linear-gradient(30deg, ${color} 0 5px, transparent 5px 10px)`, transform: isHovered || selectedMenuId === menuId  ? direction === "right" ? 'translate(-97.6px, 2.8px)' : 'translate(97.6px, -2.8px)' : undefined }}
        />
    )
}