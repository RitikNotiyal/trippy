import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const UserLogout = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')


        axios.get(`${import.meta.env.VITE_API_URL} /users /logout`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response) => {
            if (response.status == 200) {
                localStorage.removeItem('token')
                navigate('/user-login')
            }
        }).catch((err) => {
            console.error('Logout error:', err)
            localStorage.removeItem('token') 
            navigate('/user-login')
        })


    }, [navigate])

    return (
        <div>UserLogout</div>
    )
}

export default UserLogout