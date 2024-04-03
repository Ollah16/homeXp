'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { IoSend } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { LuMinus } from "react-icons/lu";


export const Chatbox = () => {

    const [isChat, handleChatBox] = useState<boolean>(false)


    return (
        <div>
            <div className={`fixed bottom-0 right-0 lg:w-1/3 md:w-3/6 sm:w-[70%] w-full overflow-hidden rounded transition-height duration-500 ease-out ${isChat ? ' sm:h-[80vh] h-[40vh]' : 'h-[0vh]'} z-40`}>
                <div className="bg-white">
                    <div className="bg-black/80 py-2 flex items-center px-2 justify-between">
                        <BsFillChatQuoteFill className="text-2xl" />
                        <div>
                            <button><LuMinus className="text-2xl font-extrabold" /></button>
                            <button className="hover:rotate-180 transition-transform ease-in-out duration-500 ml-3" onClick={() => handleChatBox(!isChat)}><RxCross2 className="text-2xl font-extrabold" /></button>
                        </div>
                    </div>
                    <div className="bg-white sm:h-[64vh] h-[24vh]  overflow-y-auto px-2">

                    </div>
                    <div className="relative px-2 bg-inherit">
                        <textarea className="focus:outline-1 text-black focus:outline-gray-500 w-full inline-block caret-gray-500 p-2 border border-gray-500 rounded-md" placeholder="Ask a question?" >
                        </textarea>
                        <IoSend className="absolute right-5 top-0 bottom-0 text-2xl text-black m-auto cursor-pointer hover:scale-110 transition-transform ease-in-out duration-300" />
                    </div>
                </div>
            </div >

            <div className="fixed bottom-20 right-7 z-20">
                <button data-testid='clickOn' onClick={() => handleChatBox(!isChat)} className="border-0 bg-transparent hover:scale-110 transition-transform duration-200 ease-in-out">
                    <BsFillChatQuoteFill className={`text-3xl md:text-5xl text-black`} />
                </button>
            </div>
        </div>
    )
}

