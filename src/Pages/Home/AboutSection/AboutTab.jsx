import { FiPhoneCall } from "react-icons/fi";
import YellowButton from "../../../Components/YellowButton";


const AboutTab = () => {
    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold text-black uppercase">Exceptional culinary <br />Experience and delicious food</h1>
            <p className="text-black opacity-80">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat facilis quidem ut odio voluptatem minus modi fugit, assumenda provident voluptas. </p>
            <div className="flex items-center gap-4 lg:gap-8">
                <YellowButton text="about more"></YellowButton>
                <p className="flex  items-center text-center text-red-600 "> <FiPhoneCall /> <span className="ml-2 text-black">+8803458647</span></p>
            </div>

        </div>
    );
};

export default AboutTab;