import Link from 'next/link'
import React from 'react'

export const GridPage: React.FC = () => {

    const xTeristics = [
        { name: 'Centralized Messaging', path: '' },
        { name: 'Instant Notification', path: '' },
        { name: 'Efficient Ticket Management', path: '' },
        { name: 'Community Bulletin Board', path: '' }
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
        <div className="bg-gray-400/10 md:px-10 px-5">
            <div className="flex justify-between gap-5 py-5 flex-col sm:grid sm:grid-cols-2 md:grid-cols-4 mt-[-100px]">
                {xTeristics.map((information, index) => (
                    <div key={index} className="overflow-hidden shadow-md shadow-gray-900/40 z-20 relative  w-full text-pretty h-[200px] inline-block p-3 border-[1px] drop-shadow-2xl rounded-lg border-black/50 bg-white">
                        <div className="text-black/80 font-bold text-xl my-2">{information.name}</div>
                        <span className="inline-block text-black text-ellipsis">
                            suscipit fuga nisi dolorem odio vero reprehenderit et id. Accusantium cupiditate enim mollitia necessitatibus, aliquam velit.
                        </span>
                        <Link href={information.path} className={`cursor-pointer font-medium text-black/90 text-md hover:underline px-3 py-2 border-[1px] border-black/20 bg-gray-200/50 
            my-3 inline-block hover:bg-gray-300 transition-colors transition-underline duration-200 ease-in-out`}>Learn More</Link>
                    </div>
                ))}
            </div>

            <div className="text-black flex-col flex sm:grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-5 py-5 ">
                {ranking.map((rank, index) => (
                    <div key={index} className="text-center flex flex-col justify-between gap-5">
                        <div className="text-6xl text-center font-bold text-zinc-950 tracking-tighter">{rank.number}</div>
                        <div className="text-lg">{rank.title}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

