import Icon from "@/components/common/Icon"

export default function Footer() {
    return (
        <footer className="relative p-4 bg-primary-dark border-2 border-black md:p-8 lg:p-10">
            <div className="mx-auto max-w-screen-xl text-center">
                <div className="flex justify-center items-center text-2xl font-semibold text-white gap-2">
                    <img src="/img/logo.png" alt="" className="w-8"/>
                    <span>NexCafe</span>
                </div>
                <p className="my-6 text-gray-200">A tasteful escape for refined flavors and relaxed moments.</p>
                <div className="flex flex-wrap justify-center items-center mb-6 text-white gap-2 sm:gap-6">
                    <Icon icon="telephone.png"/>
                    <Icon icon="whatsapp.png"/>
                    <Icon icon="mail.png"/>
                    <Icon icon="instagram.png"/>
                    <Icon icon="facebook.png"/>
                    <Icon icon="tiktok.png"/>
                </div>
                <span className="text-sm text-gray-200 sm:text-center">© 2025 NexCafe. All Rights Reserved.</span>
            </div>
        </footer>
    )
}