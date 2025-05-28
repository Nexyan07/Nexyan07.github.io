import RemoveButton from "./RemoveButton"
import Checkbox from "../common/Checkbox"

export default function CartSummaryBar({ isMobile, selectAll, onSelectAll, totalChecked, formattedTotalPrice }) {
    return (
        <div className="z-10 bg-gradient-to-br from-primary to-primary-dark shadow-lg py-4 sticky text-white bottom-0">
            <div className="flex justify-between items-center gap-4 mx-4 md:mx-8">
                <div className="flex gap-8 items-center md:text-lg font-poppins">
                    <div className="flex gap-2 items-center">
                        <Checkbox
                            id="select_all"
                            checked={selectAll}
                            onChange={onSelectAll}
                        />
                        <label htmlFor="select_all" className="cursor-pointer">{isMobile ? `All` : `Select All (${totalChecked})`}</label>
                    </div>
                    <div className="hidden md:block">
                        <RemoveButton />
                    </div>
                </div>
                <div className="flex gap-4 font-poppins md:text-lg items-center">
                    <div className="">
                        <div>{isMobile ? (
                                <>
                                    Total: <span className="text-secondary text-lg">{formattedTotalPrice}</span>
                                </>
                            ) : (
                                <>
                                Total ({totalChecked} Menu): <span className="text-secondary text-xl">{formattedTotalPrice}</span>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="">
                        <button className="bg-secondary-dark text-white py-2 px-4 rounded-lg cursor-pointer border">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}