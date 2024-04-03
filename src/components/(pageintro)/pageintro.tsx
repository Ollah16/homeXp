'use client'
import Image from 'next/image'
interface PageProp {
    [key: string]: string
}

export const PageIntro = () => {
    const intro = "The Seamless Property Concierge"

    return (
        <div className="flex justify-center relative z-10 h-[600px] overflow-hidden">
            <Image src={'/homerepair.jpg'} fill quality={100} priority={true} alt="/" className="absolute top-0 bottom-0 z-0 brightness-50 h-full object-cover object-center" />
            <h4
                className={`md:text-5xl text-shadow text-4xl my-auto text-white text-center font-bold leading-normal uppercase tracking-tight relative z-10`}>{intro}</h4>
        </div>
    )
}

