import YellowButton from "../../../Components/YellowButton";


const Slide = ({img,offerSticker,flowerSticker}) => {
    return (
        <div className='lg:flex relative bg-gradient h-[550px] pt-6 lg:pt-0'>
                    <div className=' lg:w-1/2   flex flex-col justify-center items-center text-white '>
                     <div className='flex-col lg:absolute  right-2 left-16  lg:w-[600px] space-y-3 lg:pl-8 mb-6 lg:mb-0'>
                     <p className='text-2xl lg:text-5xl font-bold    bg-red-700 bg-opacity-50 uppercase py-2'> Taste the authentic <br />saudi cuisine</p>
                     <p className='text-base'> among the best saudi chefs in the world,serving <br /> you something beyond flavor. </p>
                     <YellowButton text="explore menu"></YellowButton>
                     
                     </div>
                     {/* <p className=''> among the best saudi chefs in the world,serving you something beyond flavor. </p> */}
                     
                    </div>
                    <img className='w-32 lg:w-40 h-32 lg:h-40 absolute -right-3 lg:-right-6   bottom-16 lg:bottom-0 lg:-px-4 pr-3 lg:pr-0  lg:rotate-45 ' src={offerSticker} alt="" />
                    <img className=' w-20 h-20  absolute -right-1   pr-8 lg:pt-6 rotate-120   lg:mt-4   ' src={flowerSticker} alt="" />
                    <div className='lg:w-1/2 flex justify-center items-center px-8 lg:px-0'>
                        <img className='  w-[400px] lg:h-[400px]' src={img} alt="" />
                    </div>

                </div>
    );
};

export default Slide;