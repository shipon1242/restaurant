import BookTable from "../BookTable/BookTable";
import Carousel from "../Carousel/Carousel";
import PopularItems from "../PopularItems/PopularItems";


const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
           <PopularItems></PopularItems>
           <BookTable></BookTable>
        </div>
    );
};

export default Home;