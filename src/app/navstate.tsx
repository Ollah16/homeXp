'use client'

import { createContext, useContext, useState } from "react"

interface NavType {
    isNavToggle: boolean;
    handleToggle: (state: boolean) => void
}

const NavState = createContext<NavType | undefined>(undefined)

export const NavToggle = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [isNavToggle, setToggle] = useState<boolean>(false)

    const handleToggle = (state: boolean) => {
        setToggle(prev => prev = state)
    }

    return (<NavState.Provider value={{ isNavToggle, handleToggle }}>
        {children}
    </NavState.Provider>)
}

export const useNavState = () => useContext(NavState)
