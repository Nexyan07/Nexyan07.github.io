export default function About() {
    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-x-10 items-center mt-4 mx-auto container justify-center flex-wrap">
            <div className="aspect-square max-w-80 sm:max-w-96 md:min-w-96">
                <img src="/img/assets/gallery-2.jpeg" alt="Nexcafe shop" className="w-full h-full object-cover rounded-lg"/>
            </div>
            <div className="space-y-1 bg-primary border-2 border-primary-dark rounded-xl p-4 max-h-80 sm:max-h-96 scrollbar-none flex flex-col shadow-xl overflow-y-scroll shadow-primary-dark sm:min-w-96 max-w-80 sm:max-w-96">
                <div className="text-2xl text-white font-poppins font-bold text-justify text-wrap">Welcome to NexCafe – Your Favorite Coffee, Delivered</div>
                    <p className="font-poppins text-white text-justify font-semibol">NexCafe is more than just a café — it’s a cozy corner where good coffee ☕, great food 🍟, and local community come together 🎉. Founded in 2021 in the heart of Makassar, we are passionate about creating memorable coffee experiences, whether you're visiting us in person or ordering from the comfort of your home 🚗.</p>
                    <p className="font-poppins text-white text-justify font-semibol">Born from a love for authentic coffee and warm hospitality, KopiKita started as a small local café and quickly grew into a favorite hangout spot for students, workers, and coffee lovers alike. We take pride in serving locally sourced beans, freshly baked pastries, and a carefully curated menu that combines quality with comfort.</p>
            </div>
        </div>
    )
}