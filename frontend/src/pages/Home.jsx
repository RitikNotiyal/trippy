import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { FaAngleUp } from "react-icons/fa6";
import LocationPanel from '../components/LocationPanel';
import VehicalPanel from '../components/VehicalPanel';
import RideSearch from '../components/RideSearch';

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [openPanel, setOpenPanel] = useState(false)
    const [ridePanel, setRidePanel] = useState(false)
    const [rideSeachPanel, setRideSearchPanel] = useState(false)

    const panelRef = useRef(null)
    const iconRef = useRef(null)
    const rideRef = useRef(null)
    const rideSearchRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(() => {
        if (openPanel) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: "1.25rem",
                display: "block"
            })
            gsap.to(iconRef.current, {
                opacity: 1,
                rotation: 0,
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: "0",
                display: "none"
            })
            gsap.to(iconRef.current, {
                opacity: 0,
                rotation: 180,
                duration: 0.5,
                ease: "power2.inOut"
            })
        }
    }, [openPanel])

    useGSAP(() => {
        if (ridePanel) {
            gsap.to(rideRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(rideRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ridePanel])

    useGSAP(() => {
        if (rideSeachPanel) {
            gsap.to(rideSearchRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(rideSearchRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [rideSeachPanel])

    return (
        <div className='h-screen relative overflow-hidden'>
            <h1 className="text-xl font-bold text-gray-900 mb-1 absolute left-3 top-3">TripNow</h1>
            <div className='h-screen w-screen'>
                {/* replace with map */}
                <img className='h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map" />
            </div>
            <div className='h-screen flex flex-col justify-end absolute w-full top-0'>
                <div className='h-[30%] bg-white p-5 relative'>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-2xl font-semibold'>Find Trip</h4>
                        <FaAngleUp ref={iconRef} onClick={() => setOpenPanel(false)} className='opacity-0 cursor-pointer' />
                    </div>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }} >
                        <input
                            className='bg-[#eee] text-base rounded-lg mt-5 py-2 px-12 w-full'
                            type="text"
                            value={pickup}
                            onChange={(e) => setPickup(e.target.value)}
                            onClick={() => setOpenPanel(true)}
                            placeholder='Pickup Location' />
                        <input
                            className='bg-[#eee] text-base rounded-lg mt-4 py-2 px-12 w-full'
                            type="text"
                            value={destination}
                            onChange={(e) => setDestination(e.target.value)}
                            onClick={() => setOpenPanel(true)}
                            placeholder='Destination' />
                        <div className="absolute h-14 w-1 bg-black top-[40%] left-8 rounded-full"></div>
                        <div className="absolute border-black border-[5px] rounded-full top-[40%] left-[1.84rem] "></div>
                        <div className="absolute border-black border-[5px]  bottom-[32%] left-[1.84rem] "></div>
                    </form>
                </div>
                <div className='h-0 hidden bg-white p-0' ref={panelRef}>
                    <LocationPanel ridePanel={ridePanel} setRidePanel={setRidePanel} openPanel={openPanel} setOpenPanel={setOpenPanel} />
                </div>
            </div>
            <div className='fixed w-full z-10 bg-white bottom-0 px-3 py-6 translate-y-full' ref={rideRef}>
                <VehicalPanel setRidePanel={setRidePanel} setRideSearchPanel={setRideSearchPanel} />
            </div>
            <div className='fixed w-full z-10 bg-white bottom-0 px-4 py-6 translate-y-full' ref={rideSearchRef}>
                <RideSearch setRideSearchPanel={setRideSearchPanel} />
            </div>
        </div>
    )
}

export default Home