'use client'

import { createContext, useContext, useState } from "react"
interface NavFace {
    isNavToggle: boolean
    handleToggle: (state: boolean) => void
}


const NavState = createContext<NavFace | undefined>(undefined)

export const Navstate = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const [isNavToggle, setToggle] = useState<boolean>(false)

    const handleToggle = (state: boolean) => {
        setToggle(state)
    }

    return (
        <NavState.Provider value={{ isNavToggle, handleToggle }}>
            {children}
        </NavState.Provider>
    )
}

export const useNavState = () => {
    return useContext(NavState)
}