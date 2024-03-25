'use client'

import { getFormData } from "@/app/actions/authaction";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "../authstatus";


const AuthComponent: React.FC = () => {
    const [isReg, handleReg] = useState<boolean>(false)
    const router = useRouter()

    const [response, setResPonse] = useState<string>();

    const emailRef = useRef<any>(null)
    const unitRef = useRef<any>(null)
    const passRef = useRef<any>(null)
    const auth = useAuthState()
    if (!auth) return
    const { handleAuth: handleA } = auth;

    const handleAuth = async (formData: any) => {
        const res = await getFormData(formData)
        if (!res) return
        const { message, error } = res
        if (message) {
            handleA(true)
            router.push('/roomdetail')

        } else if (error) {
            if (error === 'user exists' || error === 'incorrect password') {
                handleReg(false)
                passRef.current.value = ''
                emailRef.current.value = ''
            } else if (error === 'no profile found') {
                unitRef.current.value = ''
                passRef.current.value = ''
                emailRef.current.value = ''
            }
        }
        setResPonse(res?.message || res?.error)
    }

    return (
        <div>
            <div className="flex justify-center text-black my-20">

                <div className="sm:w-3/5 md:w-3/6 lg:w-1/3 w-4/5">

                    <form action={handleAuth} className={`formText flex flex-col gap-4 rounded items-center border shadow 'border-black shadow-gray-500/20 p-6`}>

                        <p className="text-sm">Access and Manage Your Apartment</p>

                        <input ref={unitRef} type="text" name='unit' placeholder="Unit No" className={`placeholder:text-sm placeholder:italic w-full p-2 focus:outline-none text-black border-[1px] border-black focus:ring-2 focus:ring-gray-500/90 focus:placeholder:absolute focus:placeholder:top-0`} />

                        <input ref={passRef} type="password" name='password' placeholder="Password" className={`placeholder:text-sm placeholder:italic w-full p-2 focus:outline-none text-black focus:ring-2 focus:ring-gray-500/90 focus:placeholder:absolute focus:placeholder:top-0 border-[1px] border-black `} />

                        <input ref={emailRef} type="email" name="email" placeholder="Email" className={`placeholder:text-sm placeholder:italic w-full p-2 focus:outline-none border-[1px] focus:ring-2 text-black focus:ring-gray-500/90 ${!isReg ? 'hidden' : 'inline-block'} focus:placeholder:absolute focus:placeholder:top-0 border-[1px] border-black`} />

                        <button type="submit" className={`text-white border bg-black 
                            border-black active:ring-2 active:ring-green-500 active:border-0 hover:bg-black/70 hover:text-white
                         p-1 px-3 transition-colors duration-300 ease-in-out rounded-md `}>{!isReg ? 'Login' : 'Sign up'}</button>

                        <p className="text-inherit text-sm">Have an account?
                            <button onClick={() => handleReg(!isReg)} className={`text-inherit relative py-[0.5px] after:active:w-full after:absolute after:bottom-0 after:left-0 after:inline-block after:bg-black after:content-[''] after:w-0 after:h-px hover:after:w-full after:transition-width after:duration-300 after:ease-in-out ml-1`}>{!isReg ? 'Sign up' : 'Login'}</button></p>

                        {response && <span>{response}</span>}
                    </form>

                </div>

            </div>
        </div>
    )
}

export default AuthComponent
