import BookTable from "../BookTable/BookTable";
import Carousel from "../Carousel/Carousel";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
           <PopularItems></PopularItems>
           <BookTable></BookTable>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;