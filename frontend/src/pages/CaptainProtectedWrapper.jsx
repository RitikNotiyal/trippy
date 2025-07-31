import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CaptainProtectedWrapper = ({ children }) => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }
    }, [navigate])


    axios.get(`${import.meta.env.VITE_API_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if (response === 200) {
            setLoading(false)
        }
    }).catch(err => {
        console.log(err);
        localStorage.removeItem(`token`)
        navigate('/captain-login')
    })
    if (loading) {
        return (
            <div>
                loading....
            </div>
        )
    }

    return (
        <>
            {children}
        </>
    )
}

export default CaptainProtectedWrapper