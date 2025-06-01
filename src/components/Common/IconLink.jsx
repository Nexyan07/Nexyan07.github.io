export default function IconLink({ icon, label, href }) {
    return (
        <a href={href} className={`border rounded-lg text-white cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:bg-secondary hover:text-white shadow-lg`} target="_blank" rel="noopener noreferrer">
            <div className='p-2 flex gap-4 items-center'>
                <img src={`/img/icon/${icon}`} alt="" className='size-10' />
                <p className="font-poppins  font-semibold">{label}</p>
            </div>
        </a>
    )
}