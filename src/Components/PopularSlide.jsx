

const PopularSlide = ({img,name,description}) => {
    return (
        <div className='bg-white h-60 mx-6 lg:mx-0'>
            <img src={img} className='w-full lg:w-60 h-40 py-4 lg:py-0' alt="" />
            <div className='text-center pb-6 pt-3 text-black'>
                <h2 className='text-xl lg:text-xl font-semibold uppercase' > {name}</h2>
                <p> {description} </p>
            </div>
        </div>
    );
};

export default PopularSlide;