import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { CaptainContextProvider } from '../conetxt/CaptainContext'
import logo from '../assets/images/captain-logo.png'

const CaptainLogin = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [captainData, setCaptainData] = useState()
    const [error, setError] = useState(null);
    const [disable, setDisable] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null)
        setDisable(true)

        if (!email || !password) { 
            setError("Email and password are required.");
            return;
        }

        const captain = {
            email: email,
            password: password
        }

        try { 
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/login`, captain)

            if (response.status === 200) {
                const data = response.data
                setCaptainData(data.captain)
                localStorage.setItem('token', data.token)
                navigate('/captain-home')
            }
        } catch (err) {
            // Handle specific error scenarios
            if (err.response) {
                const { status, data } = err.response;
                if (status === 401 || status === 403) {
                    setError(data?.message || 'Invalid credentials.');
                } else if (status >= 500) {
                    setError('Server error. Please try again later.');
                } else {
                    setError('An error occurred. Please try again.');
                }
            } else if (err.request) {
                setError('No response from server. Check your connection.');
            } else {
                setError('Something went wrong. Please try again.');
            }
        } finally {
            setEmail('');
            setPassword('');
            setDisable(false)
        }
        
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
                            className={`w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition
                                ${disable ? 'bg-gray-500 cursor-not-allowed' : 'bg-black hover:bg-gray-800'}`
                            }
                        >
                            {disable ? 'Logging in...' : 'Login'}
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