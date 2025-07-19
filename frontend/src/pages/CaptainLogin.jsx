import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import logo from '../assets/images/captain-logo.png'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        setCaptainData({
            email: email,
            password: password
        })
        console.log('Captain Login Data:', captainData);

        // Reset form fields after submission
        setEmail('')
        setPassword('')
    }

    return (
        <div className="h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-between h-[90vh]">
                <div>
                    <div className="">
                        <img src={logo} alt="TripNow" className="w-32" />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            What's your email?
                        </label>
                        <input
                            type="email"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-6 text-base placeholder:text-gray-400"
                        />

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            What's your password?
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 mb-6 text-base placeholder:text-gray-400"
                        />

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Login
                        </button>

                        <p className="text-center text-sm text-gray-600 mt-4">
                            Join the fleet?{" "}
                            <Link to="/captain-signup" className="text-blue-500 hover:underline">
                                Register
                            </Link>
                        </p>
                    </form>
                </div>

                <div className="mt-6">
                    <Link to="/user-login">
                        <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                            Sign in as User
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default CaptainLogin