'use client'

import Link from "next/link"
import { FaMoon } from "react-icons/fa6";
import { BsHouseGearFill } from "react-icons/bs";
import { CgMenuRightAlt } from "react-icons/cg";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "@/app/authstatus";


const Navbar: React.FC = () => {

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
    const navRef = useRef<any>(null)
    const indicatorRef = useRef<any>(null)
    const auth = useAuthState()
    const router = useRouter()

    useEffect(() => {

        const ulElement = navRef.current;
        ulElement.addEventListener('mouseover', handleMouseEnter);
        ulElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            ulElement.removeEventListener('mouseover', handleMouseEnter);
            ulElement.removeEventListener('mouseleave', handleMouseLeave);

        };

    }, []);

    if (auth === undefined) return
    const { isLogged, handleAuth } = auth

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

    const handleRoute = (path: string) => {
        if (path.includes('authentication') && isLogged) {
            handleAuth(false)
            router.push('/')
            return
        }
        router.push(path)
    }


    return (
        <div className={`bg-black/90 h-20 relative z-20 left-0 right-0 top-0 text-inherit border-gray-100/20 md:px-10 px-5 flex justify-between items-center border-b `}>
            <div>
                <Link href={'/'} className="text-inherit items-center flex py-3">
                    <span><BsHouseGearFill className="inline align-middle text-5xl" /></span>
                    <span className="inline align-middle text-5xl font-extrabold tracking-tighter navBrand">Home</span>
                </Link>
            </div>
            <div className="flex items-center">
                <ul className="md:flex gap-5 text-inherit bg-inherit hidden" ref={navRef}>
                    {navList.map((link, index) => (
                        <li key={index} className="py-5 cursor-pointer navList text-lg" onClick={() => handleRoute(link.path)}>
                            {link.name === 'Login' && isLogged ? 'Logout' : link.name}
                        </li>
                    ))}
                </ul>

                <div className="md:hidden inline-block">
                    <CgMenuRightAlt className="text-4xl inline align-middle cursor-pointer" />
                </div>
                <span ref={indicatorRef} className={`absolute bg-white bottom-0 transition-left transition-height ease-linear duration-200`}></span>

            </div>

        </div >
    )
}

export default Navbar
