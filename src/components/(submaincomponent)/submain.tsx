'use client'

import Link from 'next/link'
import React from 'react'

export const SubMainHome: React.FC = () => {

    const xTeristics = [
        {
            name: 'Centralized Messaging',
            content: 'Efficient hub for collaboration and sharing information',
            path: ''
        },
        {
            name: 'Instant Notification',
            content: 'Real-time alerts delivered instantly for timely communication.',
            path: ''
        },
        {
            name: 'Efficient Ticket Management',
            content: 'Streamlined ticket handling for enhanced efficiency.',
            path: ''
        },
        {
            name: 'Community Bulletin Board',
            content: 'Community notice board for sharing information, updates, and announcements.',
            path: ''
        }
    ]

    const ranking = [
        {
            number: '0+',
            title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nemo aliquam! Ipsa asperiores quis eum modi .`
        },
        {
            number: '0K',
            title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nemo aliquam! Ipsa asperiores quis eum modi .`
        },
        {
            number: '0K',
            title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nemo aliquam! Ipsa asperiores quis eum modi .`
        },

        {
            number: '0K',
            title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nemo aliquam! Ipsa asperiores quis eum modi .`
        }
    ]

    return (
        <div className="bg-gray-400/10 md:px-10 px-5 relative">
            <div className="flex justify-between gap-5 py-5 flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 mt-[-100px]" data-testid='xteristics'>
                {xTeristics.map((information, index) => (
                    <div key={index} className="overflow-hidden shadow-sm shadow-gray-950/20 z-20 relative  w-full text-pretty h-[200px] inline-block p-3 border-[1px] drop-shadow-2xl rounded-lg border-black/50 bg-white">
                        <div className="text-black/80 font-bold lg:text-xl text-md my-2 uppercase tracking-normal">{information.name}</div>
                        <span className="block text-black text-ellipsis font-semibold lg:text-md text-sm">
                            {information.content}
                        </span>
                        <Link href={information.path} className={`cursor-pointer font-medium text-black/90 text-md hover:underline px-3 py-2 border-[1px] border-black/20 bg-gray-200/50 
            my-3 inline-block hover:bg-gray-300 transition-colors transition-underline duration-200 ease-in-out`}>Learn More</Link>
                    </div>
                ))}
            </div>

            <div className="text-black flex-col flex sm:grid sm:grid-cols-2 lg:grid-cols-4 justify-center gap-5 py-5" data-testid='rankdiv'>
                {ranking.map((rank, index) => (
                    <div key={index} className="text-center flex flex-col justify-between gap-5" data-testid='ranklist'>
                        < div className="lg:text-6xl md:text-4xl text-3xl text-center font-bold text-zinc-950 tracking-tighter" > {rank.number}</div>
                        <div className="lg:text-lg md:text-md text-sm">{rank.title}</div>
                    </div>
                ))
                }
            </div >
        </div >
    )
}


