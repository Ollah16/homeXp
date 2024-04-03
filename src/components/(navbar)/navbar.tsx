'use client'

import Link from "next/link"
import { RxCross2 } from "react-icons/rx";
import { BsHouseGearFill } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { useEffect, useRef, useState } from "react";
import { useAuthState } from "@/app/authstatus";
import { useHandleRoute } from "@/app/library/(customHook)/useRouteHook";
import { usePathname } from "next/navigation";
import { useNavState } from "@/app/navstate";

interface NavList {
    name: string
    path: string
}


const navList: NavList[] = [
    { name: 'About', path: '/company' },
    { name: 'Company', path: '/company' },
    { name: 'Community', path: '/community' },
    { name: 'Login', path: '/authentication' }
]

export const NavListArray = () => {
    return navList
}

export const Navbar: React.FC = () => {

    const navList = NavListArray()
    const navRef = useRef<any>(null)
    const indicatorRef = useRef<any>(null)
    const auth = useAuthState()
    const pathName = usePathname()
    const toggleState = useNavState()
    const handleRoute = useHandleRoute()
    const [isAuthPath, handlePathId] = useState<boolean>()

    useEffect(() => {
        let path = pathName === '/authentication' ? true : false
        handlePathId(path)
    }, [])

    useEffect(() => {

        const ulElement = navRef.current;
        ulElement.addEventListener('mouseover', handleMouseEnter);
        ulElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            ulElement.removeEventListener('mouseover', handleMouseEnter);
            ulElement.removeEventListener('mouseleave', handleMouseLeave);

        };

    }, []);


    const handleMouseEnter = (event: any) => {

        const target = event.target
        const indiPosition = target.getBoundingClientRect()

        if (target.tagName === 'A' || target.tagName === 'LI') {
            indicatorRef.current.style.width = `${indiPosition.width}px`
            indicatorRef.current.style.left = `${indiPosition.left}px`
            indicatorRef.current.style.height = `5px`
        }

    }

    const handleMouseLeave = (event: any) => {
        const target = event.target
        if (target.tagName === 'UL') {
            indicatorRef.current.style.height = `0px`
        }
    }

    return (
        <div className={`bg-black/90 h-20 relative z-20 left-0 right-0 top-0 text-inherit border-gray-100/20 md:px-10 px-5 flex justify-between items-center border-b `}>
            <div>
                <Link href={'/'} className="text-inherit flex items-center py-3 text-5xl relative font-extrabold">
                    <BsHouseGearFill className="my-auto inline" />
                    <span className="mb-[-8px] inline-block align-middle tracking-tighter navBrand leading-none">HOME</span>
                </Link>
            </div>
            <div className={`flex items-center ${isAuthPath ? 'hidden' : 'block'}`}>
                <ul className="md:flex gap-5 text-inherit bg-inherit hidden" ref={navRef}>
                    {navList.map((link, index) => (
                        <li key={index} className="py-5 cursor-pointer navList text-lg" onClick={() => handleRoute(link.path)}>
                            {link.name === 'Login' && auth?.isLogged ? 'Logout' : link.name}
                        </li>
                    ))}
                </ul>

                <div className="md:hidden flex items-center w-auto h-auto relative ">

                    <button onClick={() => toggleState?.handleToggle(!toggleState?.isNavToggle)} className="border-0 bg-transparent px-2 relative my-auto w-9 h-10 hover:bg-transparent/90 transition-colors duration-300 ease-in-out rounded-md flex items-center">
                        <CgMenuRightAlt className={`${toggleState?.isNavToggle ? 'text-transparent' : 'text-white'} absolute top-0 right-0 bottom-0 left-0 my-auto transition-colors duration-300 ease-in-out text-4xl inline-block`} />
                        <RxCross2 className={`${toggleState?.isNavToggle ? 'text-white' : 'text-transparent'} absolute top-0 right-0 bottom-0 left-0 my-auto transition-colors duration-300 ease-in-out text-4xl inline-block`} />
                    </button>

                </div>
                <span ref={indicatorRef} className={`absolute bg-white bottom-0 transition-left transition-height ease-linear duration-200`}></span>

            </div>

        </div >
    )
}

