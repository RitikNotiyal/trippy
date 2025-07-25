import { Link, useNavigate } from 'react-router-dom'
import { CaptainContextProvider } from '../conetxt/CaptainContext'
import { useState, useContext } from 'react'
import VehicalType from '../components/VehicalType'
import axios from 'axios'

const CaptainSignUp = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [captainData, setCaptainData] = useState('')
    const [vehicle, setVehicle] = useState({
        color: '',
        passangerCapacity: '',
        regNo: '',
        vehicalType: 'car'
    })
    const { captain, setcaptain } = useContext(CaptainContextProvider)

    const handleSubmit = async (e) => {
        e.preventDefault()


        const data = {
            fullname: {
                firstName,
                lastName
            },
            email,
            password,
            vehicals: {
                ...vehicle,
                passangerCapacity: Number(vehicle.passangerCapacity)
            }
        }

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/register`, data);
            if (response.status === 201) {
                const data = response.data
                setcaptain(data.captain)
                localStorage.setItem('token', data.token)
                navigate('/captain-home')
            }
            setFirstName('');
            setLastName('');
            setEmail('');
            setPassword('');
            setVehicle({
                color: '',
                passangerCapacity: '',
                regNo: '',
                vehicalType: 'car'
            })
        } catch (error) {
            console.error("Error during signup:", error?.response?.data || error.message)
        }
    }

    return (
        <div className="min-h-screen bg-white flex justify-center px-4 py-8 overflow-y-auto">
            <div className="w-full max-w-[375px]">
                <div className="flex-1">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">TripNow</h1>
                        <p className="text-gray-600 text-sm">Sign up to continue</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">Enter Your Name</h3>
                            <div className="flex gap-2">
                                <input
                                    name="firstName"
                                    className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all w-1/2"
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />
                                <input
                                    name="lastName"
                                    className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all w-1/2"
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">What's your email?</h3>
                            <input
                                name="email"
                                className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 w-full text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                type="email"
                                placeholder="example@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <h3 className="text-sm font-medium text-gray-700 mb-2">What's your password?</h3>
                            <input
                                name="password"
                                className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 w-full text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {/* Vehicle Details */}
                        <div className="pt-4 border-t border-gray-100">
                            <h3 className="text-sm font-medium text-gray-700 mb-4">Vehicle Details</h3>

                            {/* Color & Capacity */}
                            <div className="flex flex-col sm:flex-row gap-2">
                                <input
                                    name="color"
                                    className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    type="text"
                                    placeholder="Vehicle Color"
                                    value={vehicle.color}
                                    onChange={(e) => setVehicle({ ...vehicle, color: e.target.value })}
                                    required
                                />
                                <input
                                    name="passengerCapacity"
                                    className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    type="number"
                                    placeholder="Passenger Capacity"
                                    value={vehicle.passangerCapacity}
                                    onChange={(e) => setVehicle({ ...vehicle, passangerCapacity: e.target.value })}
                                    required
                                    min={1}
                                />
                            </div>

                            {/* Registration Number */}
                            <div className="mt-4">
                                <input
                                    name="regNo"
                                    className="bg-gray-50 rounded-lg px-3 py-2.5 border border-gray-200 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                                    type="text"
                                    placeholder="Vehicle Registration No (e.g., DL01AB1234)"
                                    value={vehicle.regNo}
                                    onChange={(e) => setVehicle({ ...vehicle, regNo: e.target.value.toUpperCase() })}
                                    required
                                />
                            </div>

                            {/* Vehicle Type */}
                            <div className="mt-4">
                                <VehicalType vehicle={vehicle} setVehicle={setVehicle} />
                            </div>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            className="bg-black hover:bg-gray-800 py-3 px-5 rounded-lg text-white w-full font-medium text-sm transition-colors duration-200 active:scale-95 transform mt-6"
                        >
                            Create Account
                        </button>

                        {/* Sign In Link */}
                        <p className="text-center text-xs text-gray-600 mt-4">
                            Already have an account?{' '}
                            <button
                                type="button"
                                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                                onClick={() => navigate('/captain-login')}
                            >
                                Sign In
                            </button>
                        </p>
                    </form>

                    {/* Terms & Policy */}
                    <div className="pt-4 border-t border-gray-100 mt-6">
                        <p className="text-center text-xs text-orange-400 mt-4">
                            By signing up, you agree to our Privacy Policy and Terms of Service.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainSignUp