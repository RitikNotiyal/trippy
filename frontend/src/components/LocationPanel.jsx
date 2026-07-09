import { IoLocation } from "react-icons/io5";


const LocationPanel = ({ ridePanel, setRidePanel, openPanel, setOpenPanel }) => {



    const location = [
        {
            address: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
        },
        {
            address: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
        },
        {
            address: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
        },
        {
            address: "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
        }
    ]


    return (
        <>
            {location.map((loc, idx) => (
                <div className="flex justify-between items-center my-4 cursor-pointer" key={idx}
                    onClick={()=>{ 
                        setRidePanel(true)
                        setOpenPanel(false)
                    } }
                >
                    <IoLocation className="w-7 h-5 mr-[10px]" />
                    <h4 className="font-medium w-[fit-content]">{loc.address}</h4>
                </div>
            ))}
        </>
    )
}

export default LocationPanel