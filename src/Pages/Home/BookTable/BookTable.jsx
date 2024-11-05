import { useForm } from "react-hook-form";
import YellowButton from "../../../Components/YellowButton"
import blackPlate from "../../../assets/BookTable/blackPlate.jpg"
const BookTable = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)

    };

    return (
        <div className=" py-10 lg:py-16 px-8 lg:px-20 " style={{
            backgroundImage: `url(${blackPlate})`,
            backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
        }} >
            <div className=" space-y-2 ">
                <div className='flex items-center gap-1'>
                    <div className='h-3 w-3 bg-red-700 text-lg '></div>
                    <div><h4 className='text-lg text-red-700 font-bold '> Book Now</h4></div>
                </div>
                <h2 className="text-white text-3xl font-bold"> BOOK YOUR TABLE </h2>
                    <p className="text-white opacity-80"> If your want to book now ? <br /> you please fill up below form and confirm book</p>
            </div>
            <div className="flex">
                <div className="w-full lg:w-1/2   ">
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full  space-y-3 py-4" >
                        <div className="md:flex w-full gap-6 ">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-lg font-medium text-white">Name*</span>
                                </div>
                                <input type="text" {...register("name")} required placeholder="your name" className="input input-bordered w-full bg-black  text-white border-white" />
                            </label>
                            <label className="form-control w-full mt-3 lg:mt-0 ">
                                <div className="label">
                                    <span className="label-text text-lg font-medium text-white">Email*</span>
                                </div>
                                <input type="email" {...register("email")} required placeholder="Enter your email" className="input input-bordered w-full bg-black  text-white border-white" />
                            </label>
                        </div>
                        <div className="md:flex w-full gap-6 ">
                            <label className="form-control w-full ">
                                <div className="label">
                                    <span className="label-text text-lg font-medium text-white">Reservation Date*</span>
                                </div>
                                <input type="date" required {...register("reservationDate")} className="input input-bordered w-full bg-black  text-white border-white" placeholder="reservation" name="" id="" />
                            </label>
                            <label className="form-control w-full mt-3 lg:mt-0 ">
                                <div className="label">
                                    <span className="label-text text-lg font-medium text-white">Total people*</span>
                                </div>
                                <input type="email" {...register("totalPeople")} required placeholder="total people" className="input input-bordered w-full bg-black  text-white border-white" />
                            </label>
                        </div>

                        <label className="form-control w-full h-56  ">
                            <div className="label">
                                <span className="label-text  text-lg font-medium text-white">Message</span>
                            </div>

                            <textarea {...register("message")}
                                placeholder="Write your message here"
                                className="textarea textarea-bordered textarea-lg w-full h-40 bg-black  text-white border-white"></textarea>
                        </label>

                        <YellowButton text="book now"></YellowButton>
                    </form>
                </div>
                {/* <div className="w-1/2" >
                    <img src={blackPlate} alt="" />
                </div> */}
            </div>
        </div>
    );
};

export default BookTable;