'use client'

import { useEffect, useRef, useState } from "react"
import { PageIntro } from "../(pageintro)/pageintro"
import { SideBar } from "../(sidebar)/sidebar"
import { useNavState } from "@/app/navstate"
import { Gridcom } from "../(gridcomp)/gridcom"
import { SubMainHome } from "../(submaincomponent)/submain"

export const HomeContent: React.FC = () => {

    const toggleState = useNavState()

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

    return (
        <div className="relative overflow-x-hidden">
            <PageIntro />

            <SubMainHome />

            <Gridcom />

            <SideBar />
        </div>
    )
}