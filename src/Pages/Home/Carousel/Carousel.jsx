import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper style
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import offerSticker from "../../../assets/carousel/offeredSticker.png"
import flowerSticker from "../../../assets/carousel/flowerSticker.png"
import YellowButton from '../../../Components/YellowButton';
import Slide from './Slide';
// slider image
import slide1 from "../../../assets/carousel/slide1.jpg"
import slide2 from "../../../assets/carousel/slide2.jpg"
import slide3 from "../../../assets/carousel/slide3.jpg"

const Carousel = () => {
    return (
        <div className='pt-20'>
            
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
                <Slide img={slide3} offerSticker={offerSticker} flowerSticker={flowerSticker}></Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide offerSticker={offerSticker} flowerSticker={flowerSticker} img={slide2}></Slide>
            </SwiperSlide>
            <SwiperSlide>
                <Slide img={slide1} offerSticker={offerSticker} flowerSticker={flowerSticker}></Slide>
            </SwiperSlide>


            {/* <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
           
        </Swiper>
    </div>
    );
};

export default Carousel;