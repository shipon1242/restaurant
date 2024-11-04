import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import img1 from "../../../assets/carousel/slide1.jpg"
import offerSticker from "../../../assets/carousel/offeredSticker.png"
import flowerSticker from "../../../assets/carousel/flowerSticker.png"
import YellowButton from '../../../Components/YellowButton';

const Carousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='lg:flex relative bg-gradient h-[550px] pt-6 lg:pt-0'>
                        <div className=' lg:w-1/2   flex flex-col justify-center items-center text-white '>
                         <div className='flex-col lg:absolute  right-2 left-32  lg:w-[600px] space-y-3 pl-8 mb-6 lg:mb-0'>
                         <p className='text-2xl lg:text-5xl font-bold    bg-red-700 bg-opacity-50 uppercase py-2'> Taste the authentic <br />saudi cuisine</p>
                         <p className='text-base'> among the best saudi chefs in the world,serving <br /> you something beyond flavor. </p>
                         <YellowButton text="explore menu"></YellowButton>
                         
                         </div>
                         {/* <p className=''> among the best saudi chefs in the world,serving you something beyond flavor. </p> */}
                         
                        </div>
                        <img className='w-32 lg:w-40 h-32 lg:h-40 absolute -right-3 bottom-16 lg:bottom-0 lg:-px-4 pr-3 lg:pr-0 lg:rotate-45' src={offerSticker} alt="" />
                        <img className=' w-20 h-20  absolute right-0   pr-8 lg:pt-6 rotate-120 mr-2 lg:mt-4   ' src={flowerSticker} alt="" />
                        <div className='lg:w-1/2 flex justify-center items-center px-8 lg:px-0'>
                            <img className='w-[400px] lg:h-[400px]' src={img1} alt="" />
                        </div>

                    </div>
                </SwiperSlide>
                {/* <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide> */}
               
            </Swiper>
        </div>
    );
};

export default Carousel;