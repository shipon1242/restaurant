import { FaFacebook, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { MdAccessTime, MdOutlineEmail, MdPhoneInTalk } from "react-icons/md";
import footerBg from "../../assets/footer/footerbg.jpg"

const Footer = () => {
    return (
        <div style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${footerBg})`, background:'cover', backgroundPosition:"center", backgroundRepeat:'no-repeat'}} className="py-16 px-6 lg:px-10 lg:space-y-10">
            <h2 className="text-2xl lg:text-4xl text-white font-bold text-center mb-6 "> we ready to have best dining experience</h2>
            {/* info */}
            <div className=" grid lg:grid-cols-4">
                {/* opening hours */}
                <div className="     ">
                    <h2 className=" text-xl md:text-2xl text-yellow-500 h-12 flex justify-center items-center"><MdAccessTime /> </h2>
                    <p className=" h-28 text-center pt-2 mx-2  mb-2 md:mb-4  text-white text-lg md:text-xl font-semibold ">
                        OPENING HOURS <br />
                        <span className="text-xs md:text-base opacity-90  font-normal">
                            Monday- Sunday
                        </span> <br />
                        <span className="text-xs md:text-base opacity-90 font-normal">
                            9.00 Am to 10.00 Pm
                        </span>
                    </p>
                </div>
                {/* CONTACT */}
                <div className="     ">
                    <h2 className=" text-xl md:text-2xl text-yellow-500 h-12 flex justify-center items-center"><MdPhoneInTalk /> </h2>
                    <p className=" h-28 text-center pt-2 mx-2  mb-2 md:mb-4  text-white text-lg md:text-xl font-medium">
                        Lets Talk's <br />
                        <span className="text-xs md:text-base opacity-90  font-normal">
                            phone: +8801737240461
                        </span> <br />
                        <span className="text-xs md:text-base opacity-90 font-normal">
                            Fax: 0-1737240461
                        </span>
                    </p>
                </div>
                {/* BOOK TABLE */}
                <div className="    ">
                    <h2 className=" text-xl md:text-2xl text-yellow-500 h-12 flex justify-center items-center"><MdOutlineEmail /> </h2>
                    <p className=" h-28 text-center pt-2 mx-2  mb-2 md:mb-4  text-white text-lg md:text-xl font-medium">
                        BOOK A TABLE <br />
                        <span className="text-xs md:text-base opacity-90  font-normal">
                            Email: restaurant@gmail.com
                        </span> <br />
                        <span className="text-xs md:text-base opacity-90 font-normal">
                            Support: 0-1737240461
                        </span>
                    </p>
                </div>
                {/* Address */}
                <div className="    ">
                    <h2 className=" text-xl md:text-2xl text-yellow-500 h-12 flex justify-center items-center"><IoLocationOutline /> </h2>
                    <p className=" h-28 text-center pt-2 mx-2  mb-2 md:mb-4  text-white text-lg md:text-xl font-medium">
                        OUR ADDRESS <br />
                        <span className="text-xs md:text-base opacity-90  font-normal">
                            house-1232,uttora sector-6
                        </span> <br />
                        <span className="text-xs md:text-base opacity-90 font-normal">
                            Dhaka,Bangladesh
                        </span>
                    </p>
                </div>
            </div>
            {/* copyright */}
            <div className="pt-10 space-y-4">
                <div className="flex justify-center gap-6">
                <FaFacebook className="w-10 h-10 p-2 rounded-full border" />
                <FaSquareInstagram className="w-10 h-10 p-2 rounded-full border" />
                <FaWhatsappSquare className="w-10 h-10 p-2 rounded-full border" />
                <FaLinkedin className="w-10 h-10 p-2 rounded-full border" />

                </div>
                <p className="text-center">Copyright © {new Date().getFullYear()} - All right reserved by restaurant</p>
            </div>

        </div>
    );
};

export default Footer;