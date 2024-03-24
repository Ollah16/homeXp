import Image from 'next/image'
import React from 'react'
import Homerepair from '@/assets/Homerepair.jpg'

interface PageProp {
    [key: string]: string
}

export const PageIntro = ({ introFill }: PageProp) => {
    return (
        <div className="flex justify-center relative z-10 h-[600px]">
            <Image src={Homerepair} quality={100} priority={true} alt="/" className="absolute top-0 bottom-0 z-0 brightness-50 h-full object-cover object-center" />
            <h4 className={`md:text-5xl text-4xl m-auto text-white md:text-start text-center font-bold leading-normal uppercase tracking-tight relative z-10`}>{introFill}</h4>
        </div>
    )
}

