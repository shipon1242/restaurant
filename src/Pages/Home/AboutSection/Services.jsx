import React from 'react';
import { FaMedal } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { GrDeliver } from 'react-icons/gr';
// grid grid-cols-1 mb-6 lg:grid-cols-3 gap-4 lg:gap-8  items-start lg:items-center pt-8 px-2 lg:px-8 text-black border
const Services = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8  items-start lg:items-center lg:justify-center py-2 lg:py-8 px-2 lg:px-8 text-black  ">
        <div className="flex justify-center items-center gap-4">
        {/* <FaUsers className="h-10 lg:h-14 w-10 lg:w-14" /> */}
        <GrDeliver  className="h-8 w-8 text-red-700" />
            <div>
                <h2 className="text-xl lg:text-xl font-semibold text-black uppercase">Fast delivery </h2>
                <p className="text-black text-opacity-60"> WithIn 30 minutes </p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-4">
        {/* <MdAccessTime className=" h-10 lg:h-14 w-10 lg:w-14" /> */}
        <FaMedal  className="h-8 w-8 text-red-700" />
            <div>
                <h2 className="text-xl lg:text-xl font-semibold text-black uppercase ">absolute dining </h2>
                <p className="text-black text-opacity-60"> Best buffet restaurant. </p>
            </div>
        </div>
        <div className="flex justify-center items-center gap-4">
        {/* <MdOutlinePriceChange className="h-10 lg:h-14 w-10 lg:w-14" /> */}
        <FiShoppingBag  className="h-8 w-8 text-red-700" />
            <div>
                <h2 className="text-xl lg:text-xl font-semibold text-black uppercase">pickup delivery </h2>
                <p className="text-black text-opacity-60"> Grab your food order. </p>
            </div>
        </div>
    </div>
    );
};

export default Services;