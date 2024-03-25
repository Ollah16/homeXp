'use client'

import { useAuthState } from "@/app/authstatus"
import { useRouter } from "next/navigation"


export const useHandleRoute = () => {
    const router = useRouter()

    const auth = useAuthState()

    const handleRoute = (path: string): void => {

        if (path.includes('authentication') && auth?.isLogged) {
            auth?.handleAuth(false)
            router.push('/')
            return
        }

        router.push(path)
    }

    return handleRoute
}

