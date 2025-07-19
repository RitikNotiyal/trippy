import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const UserSignUp = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            fullname: {
                firstName,
                lastName
            },
            email,
            password
        };

        setUserData(data);
        // Reset form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-[375px]">
                <div className="flex-1">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 mb-1">TripNow</h1>
                        <p className="text-gray-600 text-sm">Sign up to continue</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-5" action='post' onSubmit={handleSubmit}>
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

                        {/* Sign Up Button */}
                        <button
                            className="bg-black hover:bg-gray-800 py-3 px-5 rounded-lg text-white w-full font-medium text-sm transition-colors duration-200 active:scale-95 transform mt-6"
                        >
                            Sign Up
                        </button>

                        {/* Sign In Link */}
                        <p className="text-center text-xs text-gray-600 mt-4">
                            Already have an account?{' '}
                            <button
                                className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                                onClick={() => { navigate('/user-login') }}
                            >
                                Sign In
                            </button>
                        </p>
                    </form>

                    {/* Captain Signup */}
                    <div className="pt-4 border-t border-gray-100 mt-6">
                        <p className="text-center text-xs text-green-400 mt-4">
                            By signing up, you agree to our Privacy Policy and Terms of Service.
                        </p>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserSignUp