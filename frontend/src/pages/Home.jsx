import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
    const [pickup, setPickup] = useState('')
    const [destination, setDestination] = useState('')
    const [openPanel, setOpenPanel] = useState(false)

    const panelRef = useRef(null)

    const submitHandler = (e) => {
        e.preventDefault()
    }

    useGSAP(() => {
        if (openPanel) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: "1.25rem"
            })
        } else {
            gsap.to(panelRef.current, {
                height: '0%'
            })
        }


    }, [openPanel])

    return (
        <div className='h-screen relative'>
            <h1 className="text-xl font-bold text-gray-900 mb-1 absolute left-3 top-3">TripNow</h1>
            <div className='h-screen w-screen'>
                {/* replace with map */}
                <img className='h-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="Map" />
            </div>
            <div className='h-screen flex flex-col justify-end absolute w-full top-0'>
                <div className='h-[30%] bg-white p-5 relative'>
                    <h4 className='text-2xl font-semibold'>Find Trip</h4>
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
                        <div className="absolute h-14 w-1 bg-black top-[48%] left-8 rounded-full"></div>
                        <div className="absolute border-black border-[5px] rounded-full top-[45%] left-[1.84rem] "></div>
                        <div className="absolute border-black border-[5px]  bottom-[19%] left-[1.84rem] "></div>
                    </form>
                </div>
                <div className='h-0 bg-white' ref={panelRef}>

                </div>
            </div>
        </div>
    )
}

export default Home