import { IoCloseSharp, IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
const RideSearch = (props) => {
    return (
        <div>
            <div className='mb-4 flex justify-between items-center'>
                <h3 className='text-2xl font-semibold '>Looking For Ride</h3>
                <IoCloseSharp className="w-7 h-5 cursor-pointer"
                    onClick={() => {
                        props.setRideSearchPanel(false)

                    }}
                />
            </div>
            <div className='flex flex-col justify-between items-center gap-3'>
                <img className="h-32 mb-3" src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
                <div className='w-full border-t pt-5'>
                    <div className="flex justify-start items-center gap-6 pb-7 border-b mb-2">
                        <IoLocationSharp size="1.5em" />
                        <div>
                            <h3 className="text-lg font-semibold">562/11-A</h3>
                            <p className="text-md text-gray-600">Aggarwal Sweets, Ghaziabad, U.P.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-6 pb-7 border-b mb-2">
                        <IoLocationSharp size="1.5em" />
                        <div>
                            <h3 className="text-lg font-semibold">562/11-A</h3>
                            <p className="text-md text-gray-600">Aggarwal Sweets, Ghaziabad, U.P.</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center gap-6">
                        <GiMoneyStack size="1.5em" />
                        <div>
                            <h3 className="text-lg font-semibold">₹102</h3>
                            <p className="text-md text-gray-600">Cash</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RideSearch