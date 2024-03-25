'use client'

import { createContext, useContext, useState } from "react";

interface Auth {
    isLogged: boolean
    handleAuth: (state: boolean) => void
}

const AuthState = createContext<Auth | undefined>(undefined)

export const AuthProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [isLogged, setIsLogged] = useState<boolean>(false)

    const handleAuth = (state: boolean) => {
        setIsLogged(state)
    }

    return (
        <AuthState.Provider value={{ isLogged, handleAuth }}>
            {children}
        </AuthState.Provider>
    )
}

export const useAuthState = () => {
    return useContext(AuthState)
}