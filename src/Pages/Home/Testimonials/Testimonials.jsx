import { useRef, useState } from "react";
import review1 from "../../../assets/reviewVedio/review1.mp4"
import review2 from "../../../assets/reviewVedio/review2.mp4"
import { IoPlayCircleSharp } from "react-icons/io5";
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReviewSlide from "../../../Components/ReviewSlide";
const Testimonials = () => {
   
    return (
        <div className="bg-white px-6 lg:px-0 lg:pl-10 pb-10">
            {/* navigate bar */}
            <div className="flex justify-between pt-20 pb-12 pr-16 ">
                <div className="">
                <div className='flex items-center gap-1'>
                    <div className='h-3 w-3 bg-red-700 text-lg '></div>
                    <div><h4 className='text-sm text-red-700 font-bold '> Crispy, Every Bite Taste</h4></div>
                </div>
                <h1 className="text-3xl font-bold text-black"> what some of my customers say</h1>
                </div>
                <div className='hidden lg:flex flex-row gap-2  w-20 justify-between mr-14'>
                        <button className='custom-prev-button btn btn-md rounded-full btn-circle bg-white hover:bg-white '> <IoIosArrowBack className='w-6 h-6 text-black hover:text-red-700 ' /></button>
                        <button className='custom-next-button btn bg-white hover:bg-white rounded-full btn-circle '>
                            <IoIosArrowForward className='w-6 h-6 text-black hover:text-red-700' />
                        </button>
                    </div>
            </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"

                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button'
                    }}

                
                >
 
                    <SwiperSlide>
                        <ReviewSlide video={review1}></ReviewSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewSlide video={review2}></ReviewSlide>
                    </SwiperSlide>
                    
                </Swiper>
           
                <div className='lg:hidden flex flex-row text-center justify-center items-center gap-2   pb-6 mt-6'>
                <button className='custom-prev-button btn btn-md rounded-full btn-circle bg-white hover:bg-white '> <IoIosArrowBack className='w-6 h-6 text-black hover:text-red-700 ' /></button>
                <button className='custom-next-button btn bg-white hover:bg-white rounded-full btn-circle '>
                    <IoIosArrowForward className='w-6 h-6 text-black hover:text-red-700' />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;