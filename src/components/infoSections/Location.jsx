export default function Location() {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-10 items-center mt-4 mx-8 sm:mx-10 md:mx-0 md:justify-center md:flex-wrap">
            <div className="aspect-square w-80 max-w-80 md:min-w-96">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2081.785959311559!2d119.58372834521911!3d-4.992538096140158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sid!4v1748000995127!5m2!1sen!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full border rounded-xl"></iframe>
            </div>
            <div className="space-y-1 bg-primary border-2 border-primary-dark rounded-xl p-4 md:p-8 md:min-h-96 justify-center flex flex-col shadow-xl shadow-primary-dark max-w-80 md:min-w-96 md:max-w-96">
                <div className="text-2xl text-white font-poppins font-bold text-justify">You can find us at:</div>
                <p className="font-poppins text-white text-justify font-semibold">📍 Jl. Poros Maros, Indonesia</p>
                <p className="font-poppins text-white text-justify font-semibold">🚪 Open daily from 08.00 AM - 10.00 PM (WIB)</p>
                <p className="font-poppins text-white text-justify font-semibold">☕ Come by for a cup, stay for the vibes — or order online and let our café come to you!</p>
            </div>
        </div>
    )
}