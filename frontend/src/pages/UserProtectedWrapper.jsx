import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserProtectedWrapper = ({ children }) => {
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    useEffect(() => {

        if (!token) {
            navigate('/user-login')
        }
    }, [navigate])

    axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
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
        navigate('/user-login')
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

export default UserProtectedWrapper