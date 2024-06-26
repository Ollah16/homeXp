import React, { useEffect } from "react"
import { NavListArray } from "../(navbar)/navbar"
import { useAuthState } from "@/app/authstatus"
import { useHandleRoute } from "@/app/library/(customHook)/useRouteHook"
import { useNavState } from "@/app/navstate"

export const SideBar: React.FC = () => {
    const toggleState = useNavState()
    const auth = useAuthState()
    const handleRoute = useHandleRoute()

    const navList = NavListArray()


    return (
        <div className={`absolute h-[100vh] w-5/6 top-0 z-40 overflow-y-auto md:hidden block transition-right bg-white duration-500 ease-in-out ${toggleState?.isNavToggle ? 'right-0' : 'right-[-1000px]'}`}>
            <ul className="flex flex-col text-black justify-between">
                {navList.map((nav, index) => (
                    <li key={index} className={`px-4 py-2 after:absolute after:content-[''] after:inline-block after:w-full after:h-px after:bg-gray-500/30 after:bottom-0 after:left-0 after:right-0 relative
                    before:absolute before:content-[''] before:inline-block before:w-0 before:h-px before:bg-gray-500 before:bottom-0 before:left-0 
                    hover:before:w-full before:transition-width before:ease-in-out before:duration-500`}>
                        <div onClick={() => handleRoute(nav.path)}
                            className={`text-xl font-semibold cursor-pointer`}
                        >
                            {nav.name === 'Login' && auth?.isLogged ? 'Logout' : nav.name}
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}

