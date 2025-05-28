export default function TestimonialCard({ comment, user, userJustify }) {
    return (
        <div className="flex flex-col w-72 lg:w-[22rem] h-44 lg:h-60 border-2 p-4 lg:p-7 px-6 border-primary-dark rounded-lg shadow-lg bg-primary justify-between">
            <div className="lg:min-h-[112px]">
                <p className="text-white font-poppins text-justify lg:text-xl">{comment}</p>
            </div>
            <hr className="text-primary-dark my-1"/>
            <div className={`flex items-center ${userJustify === "Right" ? "max-md:justify-end" : ""} gap-2`}>
                <div className="w-8 lg:w-10 rounded-full bg-secondary-dark border">
                    <img src="/img/assets/user.png" alt="" className="w-full p-2" />
                </div>
                <div className="text-white font-poppins lg:text-xl">{user}</div>
            </div>
        </div>
    )
}