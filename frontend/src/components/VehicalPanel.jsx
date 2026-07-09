import { IoCloseSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
const VehicalPanel = (props) => {
    return (
        <>
            <div className='mb-4 flex justify-between items-center'>
                <h3 className='text-2xl font-semibold '>Choose Your Ride</h3>
                <IoCloseSharp className="w-7 h-5 cursor-pointer"
                    onClick={() => {
                        props.setRidePanel(false)

                    }}
                />
            </div>

            <div className='flex items-center justify-between p-3 w-full border-2 active:border-black shadow-sm mb-3 rounded-md cursor-pointer'
                onClick={() => {
                    props.setRideSearchPanel(true)
                    props.setRidePanel(false)
                }}>
                <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="car" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>UberGo <span><FaUser className='inline-block mr-1' />4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-sm text-gray-600'>Affordable compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹102.56</h2>
            </div>
            <div className='flex items-center justify-between p-3 w-full border-2 active:border-black shadow-sm mb-3 rounded-md'
                onClick={() => {
                    props.setRideSearchPanel(true)
                    props.setRidePanel(false)
                }}>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="bike" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>Moto <span><FaUser className='inline-block mr-1' />1</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-sm text-gray-600'>Affordable bike rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹52.56</h2>
            </div>
            <div className='flex items-center justify-between p-3 w-full border-2 active:border-black shadow-sm mb-3 rounded-md'
                onClick={() => {
                    props.setRideSearchPanel(true)
                    props.setRidePanel(false)
                }}>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="auto" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>Auto <span><FaUser className='inline-block mr-1' />3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p className='font-normal text-sm text-gray-600'>Affordable compact rides</p>
                </div>
                <h2 className='text-lg font-semibold'>₹72.56</h2>
            </div>
        </>
    )
}

export default VehicalPanel