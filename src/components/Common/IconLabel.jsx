export default function IconLabel({ icon, label }) {
    return (
        <div className="flex items-center gap-2">
            <div className="w-8 rounded-full bg-secondary-dark border border-white">
                <img src={`/img/icon/${icon}`} alt="icon" className="w-full p-2" />
            </div>
            <div className="text-white font-poppins">{label}</div>
        </div>
    )
}