import IconLabel from '@/components/common/IconLabel'

export default function Contact() {
    return (
        <div className="bg-primary border-2 border-primary-dark rounded-lg my-4 max-w-96 mx-10 sm:mx-auto">
            <div className="p-4">
                <div className="flex flex-col space-y-1">
                    <p className="font-poppins text-white text-justify font-semibold text-wrap">Got a question or just want to say hi?</p>
                    <IconLabel icon="telephone.png" label="+62 896 9595 5912" />
                    <IconLabel icon="whatsapp.png" label="+62 896 9595 5912" />
                    <IconLabel icon="mail.png" label="support@nexcafe.id" />
                    <IconLabel icon="instagram.png" label="@NexCafe_id" />
                    <IconLabel icon="tiktok.png" label="@NexCafe_" />
                    <IconLabel icon="facebook.png" label="@NexCafe_id" />
                </div>
            </div>
        </div>
    ) 
}