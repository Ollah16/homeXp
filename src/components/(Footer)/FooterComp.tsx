import { RiTiktokLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";


export const FooterComp = () => {
    const footerList = [
        'Get in touch',
        'Terms of use',
        'Privacy policy',
        'Modern slavery statement',
        'Compliments and complaints',
        'Accessibility statement',
    ]

    const socials = [
        { icon: <RiTiktokLine className="text-xl" />, color: 'text-[#000000]' },
        { icon: <FaXTwitter className="text-xl" />, color: 'text-[#000000]' },
        { icon: <FaLinkedinIn className="text-xl" />, color: 'text-[#0077B5]' },
        { icon: <IoLogoYoutube className="text-xl" />, color: 'text-[#FF0000]' },
    ]

    return (
        <div>
            <div className="bg-gray-500/20 text-black/20 md:px-10 px-3 py-5">
                <div className="flex sm:flex-row flex-col md:gap-5 w-full">
                    <ul className="md:grid md:grid-cols-2 gap-x-3 flex flex-col sm:w-1/2 w-full">
                        {footerList.map((list, index) => (
                            <li key={index} className="py-2">
                                <span className="tracking-tight py-2 cursor-pointer font-bold hover:underline hover:text-green-950/80 text-md text-black/70">{list}</span>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex flex-col gap-2 text-black sm:w-1/2 w-full">
                        <li className="py-2"><span className="tracking-tight py-2 cursor-pointer font-bold hover:underline hover:text-green-950/80 text-md text-black/70">Follow us</span></li>
                        <li className="flex gap-2">
                            {socials.map((soc, index) => (
                                <span key={index} className={`rounded-full inline-block ${soc.color} bg-white p-1 transition-shadow duration-500 ease-in-out cursor-pointer hover:shadow-xl hover:shadow-gray-950/50`}>{soc.icon}</span>
                            ))}
                        </li>
                        <li className="py-2"><span className="tracking-tight py-2 cursor-pointer font-bold hover:underline hover:text-green-950/80 text-md text-black/70">Your data is safe</span></li>
                    </ul>

                </div>
                <div className="before:content-[''] before:inline-block before:h-px before:bg-black/70 before:w-screen before:md:-ml-10 before:md:-mr-10 before:-ml-3 before:-mr-3">
                    <p className="text-xs font-bold text-black my-3">@{new Date().getFullYear()} HomeX</p>
                </div>
            </div>
        </div >
    )
}

