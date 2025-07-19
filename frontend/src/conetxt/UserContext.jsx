import React, { createContext, useState } from 'react'

export const UserContextProvider = createContext

const UserContext = ({ children }) => {
    const [user, setUser] = useState({
        fullname: {
            firstName: '',
            lastName: ''
        },
        email: '',
    })
    return (
        <div>
            <UserContextProvider.Provider value={{ user, setUser }}>
                {children}
            </UserContextProvider.Provider>
        </div>
    )
}

export default UserContext