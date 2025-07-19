import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/images/splash-screen.png'

const Home = () => {
    return (
        <div
            className='h-screen w-full justify-between flex flex-col pt-10 bg-cover bg-no-repeat bg-center'
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1 className='text-2xl font-bold ml-8'>TripNow</h1>
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-2xl font-semibold'>Get Started with TripNow</h2>
                <Link to="/user-login" className='flex justify-center items-center bg-black py-3 px-5 rounded text-white w-full mt-4'>Continue</Link>
            </div>
        </div>
    )
}

export default Home