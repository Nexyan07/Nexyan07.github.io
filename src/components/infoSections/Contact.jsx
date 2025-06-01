import IconLabel from '@/components/common/IconLabel'
import IconLink from '../common/IconLink'

export default function Contact() {
    return (
        <div className='flex flex-col justify-center md:gap-10 mx-auto sm:mx-4 md:flex-row'>
            <div className="bg-primary border-2 border-primary-dark rounded-lg my-4 w-80 md:w-96 mx-auto md:mx-0 shadow-xl shadow-primary-dark">
                <div className="p-4 flex flex-col space-y-1">
                    <p className="font-poppins text-white text-cente font-semibold text-xl">Order Now!</p>
                    <div className='flex flex-col gap-4'>
                        <IconLink icon="gofood.png" label="GoFood" />
                        <IconLink icon="order.png" label="ShopeeFood" />
                        <IconLink icon="whatsapp.png" label="WhatsApp" />
                    </div>
                </div>
            </div>
            <div className="bg-primary border-2 border-primary-dark rounded-lg my-4 w-80 md:w-96 mx-auto md:mx-0 shadow-xl shadow-primary-dark">
                <div className="p-4 flex flex-col space-y-1">
                    <p className="font-poppins text-white font-semibold text-wrap text-xl">Got a question?</p>
                    <div className='flex flex-col gap-4'>
                        <IconLink icon="whatsapp.png" label="WhatsApp" />
                        <IconLink icon="instagram.png" label="Instagram" />
                        <IconLink icon="telephone.png" label="Telephone" />
                    </div>
                </div>
            </div>
        </div>
    ) 
}