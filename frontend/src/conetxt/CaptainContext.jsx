import React, { createContext, useState } from 'react'

export const CaptainContextProvider = createContext()

const CaptainContext = ({ children }) => {
    const [captain, setcaptain] = useState({
            fullname: {
                firstName: '',
                lastName: ''
            },
            email: '',
        })
        return (
            <div>
                <CaptainContextProvider.Provider value={{ captain, setcaptain }}>
                    {children}
                </CaptainContextProvider.Provider>
            </div>
        )
}

export default CaptainContext