'use client'

import { useEffect, useRef, useState } from "react"
import { GridPage } from "../(submaincomponent)/submain"
import { PageIntro } from "../(pageintro)/pageintro"
import { SideBar } from "../(sidebar)/sidebar"
import { useNavState } from "@/app/navstate"

export const HomeContent: React.FC = () => {

    const toggleState = useNavState()

    const [introFill, setIntroFill] = useState<string>('')

    const intro = "Welcome to the Seamless Property Concierge"

    useEffect(() => {

        if (introFill.includes(intro)) return

        const introSplit = intro.split(' ')
        let displayInt: any;
        let index = 0
        let newIntro: string = ''

        displayInt = setInterval(() => {

            if (index < introSplit.length) {
                newIntro += ` ${introSplit[index]}`
                setIntroFill(newIntro)
                index++
            }
            else { clearInterval(displayInt) }

        }, 150)

        return () => {
            clearInterval(displayInt)
        }

    }, [])

    useEffect(() => {
        const handleToggleEffect = () => {
            let getBody: any = document.querySelector('body')

            if (toggleState?.isNavToggle) {
                getBody.style.overflowY = 'hidden'
            }
            else {
                getBody.style.overflowY = 'auto'
            }
        }

        handleToggleEffect()
    }, [toggleState?.isNavToggle])

    console.log(introFill)

    return (
        <div className="relative overflow-x-hidden">
            <PageIntro introFill={introFill} />

            <GridPage />

            <SideBar />
        </div>
    )
}