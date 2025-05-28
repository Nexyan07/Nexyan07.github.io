export default function Icon({ icon }) {
    return (
        <div className={`border rounded-full w-10`}>
            <img src={`/img/icon/${icon}`} alt="icon" className="w-full p-2" />
        </div>
    )
}