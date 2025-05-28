import TestimonialCard from "@/components/common/TestimonialCard"

export default function Testimonials() {
    return (
        <div className="mt-4 flex flex-col md:flex-row flex-wrap justify-center lg:justify-evenly items-center sm:mx-8 md:gap-8 max-md:space-y-4">
            <TestimonialCard comment="“The best cold brew in town. Fast delivery and amazing taste — it feels like sitting in the café!”👍❤" user="Anto"/>
            <TestimonialCard comment="“I ordered online and everything came fresh and warm. Highly recommend their Vanilla Latte!”😊👍" user="Nabila" userJustify="Right"/>
            <TestimonialCard comment="“NexCafe has become my daily coffee fix. Love the app and how smooth the experience is.”😍" user="Fana"/>
        </div>
    )
}