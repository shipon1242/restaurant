
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
// slide image
import burger1 from "../../../assets/popularFoodItems/Cheeseburger1.png"
import burger2 from "../../../assets/popularFoodItems/burger2.png"
import pizza1 from "../../../assets/popularFoodItems/pizza1.png"
import pizza2 from "../../../assets/popularFoodItems/pizza2.jpg"
import chiliImg from "../../../assets/others/chiliImg.png"

// import frenchFry1 from "../../../assets/popularFoodItems/french fry.jpg"
import chicken1 from "../../../assets/popularFoodItems/chicken1.png"
import PopularSlide from '../../../Components/PopularSlide';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const PopularItems = () => {

    return (
        <div className='relative bg-yellow-100 lg:py-10 px-2 lg:px-20'>
            <img className='hidden lg:block absolute w-20 h-20 -left-2 top-32 ' src={chiliImg} alt="" />
            <div className='space-y-2 ml-6 lg:ml-0 pt-8 '>
                <div className='flex items-center gap-1'>
                    <div className='h-3 w-3 bg-red-700 text-lg '></div>
                    <div><h4 className='text-sm text-red-700 font-bold '> Crispy, Every Bite Taste</h4></div>
                </div>
                <div className='flex justify-between'>

                    <h2 className='text-2xl lg:text-4xl font-bold text-black'> Popular food items</h2>

                    <div className='hidden lg:flex flex-row gap-2  w-20 justify-between mr-8'>
                        <button className='custom-prev-button btn btn-md rounded-full btn-circle bg-white hover:bg-white '> <IoIosArrowBack className='w-6 h-6 text-black hover:text-red-700 ' /></button>
                        <button className='custom-next-button btn bg-white hover:bg-white rounded-full btn-circle '>
                            <IoIosArrowForward className='w-6 h-6 text-black hover:text-red-700' />
                        </button>
                    </div>

                </div>

            </div>


            <div className='lg:py-8 mt-6 mb-4'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Pagination]}
                    className="mySwiper"

                    navigation={{
                        prevEl: '.custom-prev-button',
                        nextEl: '.custom-next-button'
                    }}

                    breakpoints={{
                        0: { slidesPerView: 1 },

                        1024: { slidesPerView: 4 },
                    }}
                >


                    <SwiperSlide>
                        <PopularSlide img={chicken1} name="special pizza" description="Italian special pizza" ></PopularSlide>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <PopularSlide img={frenchFry1} name=" french fries" description="Italian special French fries ." ></PopularSlide>
                    </SwiperSlide> */}
                    <SwiperSlide>
                        <PopularSlide img={burger1} name="special pizza" description="Italian special pizza" ></PopularSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopularSlide img={pizza2} name="special pizza" description="Italian special pizza" ></PopularSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopularSlide img={burger2} name="special pizza" description="Italian special pizza" ></PopularSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <PopularSlide img={pizza1} name="special pizza" description="Italian special pizza" ></PopularSlide>
                    </SwiperSlide>

                </Swiper>

            </div>
            <div className='lg:hidden flex flex-row text-center justify-center items-center gap-2   pb-6'>
                <button className='custom-prev-button btn btn-md rounded-full btn-circle bg-white hover:bg-white '> <IoIosArrowBack className='w-6 h-6 text-black hover:text-red-700 ' /></button>
                <button className='custom-next-button btn bg-white hover:bg-white rounded-full btn-circle '>
                    <IoIosArrowForward className='w-6 h-6 text-black hover:text-red-700' />
                </button>
            </div>
        </div>
    );
};

export default PopularItems;