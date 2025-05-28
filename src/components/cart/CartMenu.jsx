import CartMenuItem from "@/components/cart/CartMenuItem";

export default function CartMenu({ children, isMobile }) {
    return (
        <div className="w-full bg-gradient-to-br from-primary to-primary-dark rounded flex flex-col justify-center shadow-lg">
            {isMobile ? <MobileFormat>{children}</MobileFormat> : <TableFormat>{children}</TableFormat>}
        </div>
    )
}

function TableFormat({ children }) {
    return (
        <table className="mx-8 mt-4 z-10 hidden md:table">
            <thead height="40px" className="text-white">
                <tr>
                    <th className="w-10"></th>
                    <th width="120px"></th>
                    <th className="text-start font-poppins text-lg">Menu</th>
                    <th className="w-40 font-poppins text-lg">Price</th>
                    <th className="w-40 font-poppins text-lg">Quantity</th>
                    <th className="w-40 font-poppins text-lg">Total</th>
                    <th className="w-28 font-poppin text-lg">Action</th>
                </tr>
            </thead>
            <tbody className="text-white">
                {children}
            </tbody>
        </table>
    )
}

function MobileFormat({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}