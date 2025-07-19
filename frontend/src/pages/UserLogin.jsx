import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        setUserData({
            email: email,
            password: password
        })

        // Reset form fields after submission
        setEmail('')
        setPassword('')
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-[375px] bg-gray-100 h-screen px-5 pt-7 pb-4 flex flex-col justify-between rounded-lg">
                <div>
                    <h1 className="text-2xl font-bold mb-8 text-center">TripNow</h1>
                    <form onSubmit={handleSubmit}>
                        <h3 className="text-base font-semibold mb-2">What's your email?</h3>
                        <input
                            className="bg-white rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-lg mb-7"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="example@example.com"
                            required
                        />

                        <h3 className="text-base font-semibold mb-2">What's your password?</h3>
                        <input
                            className="bg-white rounded px-4 py-2 border border-gray-300 w-full text-lg placeholder:text-lg mb-5"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                        />

                        <button type="submit" className="bg-black py-3 px-5 rounded text-white w-full mt-4">
                            Login
                        </button>

                        <p className="text-center mt-4">
                            Don't have an account?{' '}
                            <Link to="/user-signup" className="text-blue-500 font-medium hover:underline">
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>

                <div>
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Are you a driver?{' '}
                        <Link to="/captain-login" className="text-green-600 font-medium hover:underline">
                            Sign in as Captain
                        </Link>
                    </p>
                </div>
            </div>
        </div>
)
}

export default UserLogin