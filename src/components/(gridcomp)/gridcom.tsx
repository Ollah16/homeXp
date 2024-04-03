'use client'
import messaging from '@/assets/messaging.jpg'
import Image from 'next/image'
import maintenance from '@/assets/maintenance.jpg'

export const Gridcom = () => {

    const gridComponent = [
        { name: 'Efficiently Coordinate with Reception and Maintenance Teams for Seamless Operations.', image: messaging },
        { name: 'Maintenance team is readily available during business hours to ensure prompt and efficient repairs and maintenance services.', image: maintenance },

    ]

    return (
        <div className="bg-white grid lg:grid-cols-1 grid-rows-4 text-black w-full">
            {gridComponent.map((grid, index) => (
                <div key={index} className={`text-center flex flex-col lg:flex-row items-center lg:h-[400px] h-[500px]`}>
                    <div className={`lg:w-1/2 w-full px-5 flex items-center h-full text-xl lg:text-3xl ${index % 2 && 'lg:order-2'}`}>
                        <span className='inline-block my-auto'> {grid.name}</span>
                    </div>
                    <div className='lg:w-1/2 w-full relative h-full'>
                        <Image src={grid.image} className="absolute h-full rotate-y top-0 bottom-0 left-0 right-0 object-cover" alt='' />
                    </div>
                </div>
            ))
            }
        </div >
    )
}
