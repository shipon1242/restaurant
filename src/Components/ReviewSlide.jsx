import { useRef, useState } from "react";
import { IoPlayCircleSharp } from "react-icons/io5";


const ReviewSlide = ({video}) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    }
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:mr-10">
        <div className="w-full lg:w-1/3 bg-orange-400 px-8 pt-8  ">
            <p className="text-black">
                "Every dish was packed with fresh flavors, and the ambiance was perfect for a night out! The staff was welcoming"
            </p>
            <div className="flex justify-between items-center mt-6">
                <div className="text-black">
                    <h2 className="text-xl font-semibold"> Khalid Farhan </h2>
                    <p> Uttora ,Dhaka </p>
                </div>
                {/* profile image */}
                <div>
                    <div className="avatar">
                        <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="w-full h-1 bg-black mt-4 mb-4"></div>
        </div>
        <div className="w-full lg:w-3/5  relative ">
            <video  className=" " ref={videoRef} onClick={togglePlayPause} src={video}></video>
            {!isPlaying && (
                <button
                    onClick={togglePlayPause}
                    className="absolute text-yellow-400 bg-black bg-opacity-60  rounded-full hover:bg-opacity-80 focus:outline-none"
                    style={{
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                >
                    <IoPlayCircleSharp className="w-10 h-10" />
                </button>


            )}
       
        </div>

    </div>
    );
};

export default ReviewSlide;