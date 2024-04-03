'use client'

import { useAuthState } from "@/app/authstatus"
import { useNavState } from '@/app/navstate'
import { useRouter } from "next/navigation"


export const useHandleRoute = () => {

    const auth = useAuthState()
    const navToggle = useNavState()
    const router = useRouter()

    const handleRoute = (path: string): void => {

        navToggle?.handleToggle(false)
        if (path.includes('authentication') && auth?.isLogged) {
            auth?.handleAuth(false)
            router.push('/')
            return
        }
        router.push(path)
    }

    return handleRoute
}

