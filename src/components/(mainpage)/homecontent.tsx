'use client'

import { useEffect } from "react"
import { SideBar } from "../(sidebar)/sidebar"
import { useNavState } from "@/app/navstate"
import { Gridcom } from "../(gridcomp)/gridcom"
import { SubMainHome } from "../(submaincomponent)/submain"
import { PageIntro } from "../(pageintro)/pageintro"
import { Navbar } from "../(navbar)/navbar"

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
            <Navbar path={''} />

            <section className="relative">
                <PageIntro />

                <SubMainHome />

                <Gridcom />

                <SideBar />
            </section>
        </div>
    )
}