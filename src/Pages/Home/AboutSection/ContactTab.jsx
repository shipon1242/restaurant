import { FiPhoneCall } from "react-icons/fi";
import YellowButton from "../../../Components/YellowButton";
import { MdOutlineMailOutline } from "react-icons/md";


const ContactTab = () => {
    return (
        <div className="space-y-3">
        <h1 className="text-2xl font-bold text-black uppercase">If you want to know about us  and our food please contact!</h1>
        <p className="text-black opacity-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat facilis quidem ut odio voluptatem minus . </p>
        <div className=" lg:flex items-center space-y-1 lg:space-y-0   gap-4 lg:gap-8">
            <YellowButton text="contact us"></YellowButton>
            <div>
            <p className="flex  items-center text-center pt-2 text-red-600 "> <FiPhoneCall /> <span className="ml-2 text-black">+8803458647</span></p>
            <p className="flex  items-center text-center pb-2 text-red-600 "> <MdOutlineMailOutline /> <span className="ml-2 text-black">restaurant@gmail.com</span></p>
            </div>
            
        </div>

    </div>
    );
};

export default ContactTab;