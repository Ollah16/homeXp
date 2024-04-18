'use client'

import { useEffect, useRef, useState } from "react";
import { useAuthState } from "../authstatus";
import { getFormData } from '../actions/authaction';
import { useHandleRoute } from "../library/(customHook)/useRouteHook";
import { Navbar } from "@/components/(navbar)/navbar";
import { usePathname } from "next/navigation";


const AuthComponent: React.FC = () => {
    const [isReg, handleReg] = useState<boolean>(false)

    const [response, setResPonse] = useState<string>();
    const [formInput, setFormInp] = useState({
        unit: '', password: '', email: ''
    })
    const handleRoute = useHandleRoute()
    const emailRef = useRef<any>(null)
    const unitRef = useRef<any>(null)
    const passRef = useRef<any>(null)
    const auth = useAuthState()
    const [pathName, setPathName] = useState(usePathname())


    const handleAuth = async (e: any) => {

        const { unit, password } = formInput

        if (unit === '' || password === '') {
            e.preventDefault()
            if (unit === '' && password != '') {
                setResPonse(`Pls Enter your unit number`)
            } else if (password === '' && unit != '') {
                setResPonse(`Pls fill in password`)
            } else {
                setResPonse(`Pls fill the form`)
            }
            return
        }

        const res = await getFormData(formInput)

        if (res?.message) {
            auth?.handleAuth(true)
            handleRoute('/roomdetail')

        } else if (res?.error) {
            if (res?.error === 'user exists' || res?.error === 'incorrect password') {
                handleReg(false)
                passRef.current.value = ''
                emailRef.current.value = ''
            } else if (res?.error === 'no profile found') {
                unitRef.current.value = ''
                passRef.current.value = ''
                emailRef.current.value = ''
            }
        }
        setResPonse(res?.message || res?.error)
    }

    const handleNonR = () => {


    }

    return (
        <div>
            <Navbar path={pathName} />

            <div className="flex justify-center text-black my-20">

                <div className="sm:w-3/5 md:w-3/6 lg:w-1/3 w-4/5 flex flex-col gap-3 rounded items-center border shadow 'border-black shadow-gray-500/20 p-6 overflow-hidden">

                    <form onSubmit={handleAuth}
                        className={`formText flex flex-col justify-between items-center gap-3 w-full`}>

                        <p className="lg:text-lg md:text-md sm:text-sm text-xs text-center uppercase font-bold">Access and Manage Your Apartment</p>

                        <input ref={unitRef} onChange={(e) => setFormInp({ ...formInput, unit: e.target.value })} type="text" name='unit' placeholder="Unit No"
                            className={`placeholder:text-sm focus:placeholder:text-xs placeholder:italic w-full p-2 focus:outline-none text-black border-[1px] border-black/45 focus:ring-1 focus:ring-gray-500/90 focus:placeholder:absolute focus:placeholder:top-0`} />

                        <input ref={passRef} onChange={(e) => setFormInp({ ...formInput, password: e.target.value })} type="password" name='password' placeholder="Password" className={`placeholder:text-sm focus:placeholder:text-xs placeholder:italic w-full p-2 focus:outline-none text-black focus:ring-1 focus:ring-gray-500/90 focus:placeholder:absolute focus:placeholder:top-0 border-[1px] border-black/45 `} />

                        <input ref={emailRef} onChange={(e) => setFormInp({ ...formInput, email: e.target.value })} type="email" name="email" placeholder="Email" className={`placeholder:text-sm focus:placeholder:text-xs placeholder:italic w-full p-2 focus:outline-none border-[1px] focus:ring-1 text-black focus:ring-gray-500/90 ${!isReg ? 'hidden' : 'inline-block'} focus:placeholder:absolute focus:placeholder:top-0 border-[1px] border-black/45`} />

                        <button type="submit" className={`text-white bg-black/90 relative overflow-hidden
                        after:transition-height after:duration-200 after:ease-in-out
                        after:absolute after:h-0 after:w-full after:content-[''] hover:after:h-full after:bg-gradient-to-t after:from-white/50 after:via-transparent after:to-black/30 after:text-white after:bottom-0 after:left-0 after:right-0
                             active:ring-2 active:ring-green-500 active:border-0
                         p-1 px-3 transition-colors duration-300 ease-in-out`}>{!isReg ? 'Login' : 'Sign up'}</button>

                    </form>

                    <p className="text-inherit lg:text-sm md:text-md sm:text-sm text-xs text-center font-semibold tracking-tight">Have an account?
                        <button onClick={() => handleReg(!isReg)} className={`text-inherit relative py-[1px] after:active:w-full after:absolute after:bottom-0 after:left-0 after:inline-block after:bg-black/90 after:content-[''] after:w-0 after:h-[2px] hover:after:w-full after:transition-width after:duration-300 after:ease-in-out ml-1`}>{!isReg ? 'Sign up' : 'Login'}</button></p>

                    {response && <span className="text-sm">{response}</span>}
                </div>

            </div>
        </div>
    )
}

export default AuthComponent
