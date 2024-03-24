'use client'

import { useEffect, useState } from "react"
import { Chatbox } from "../(chatbox)/chatbox"
import { GridPage } from "../(submaincomponent)/submain"
import { PageIntro } from "../(pageintro)/pageintro"
import { Gridcom } from "../(gridcomp)/gridcom"

export const HomeContent: React.FC = () => {

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

    return (
        <div className="relative">
            <PageIntro introFill={introFill} />

            <GridPage />

            <Chatbox />

            <Gridcom />
        </div>
    )
}