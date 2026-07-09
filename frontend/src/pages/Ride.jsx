import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { GiMoneyStack } from 'react-icons/gi';

const RideDetails = () => {
    return (
        <div className='h-screen flex flex-col'>
            <div className='h-3/5 flex-shrink-0'>
                <img
                    className='h-full w-full object-cover'
                    src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
                    alt="Map"
                />
            </div>
            <div className='h-2/5 flex flex-col p-4'>
                <div className="flex justify-between items-center mb-4 flex-shrink-0">
                    <img
                        className="h-12 w-auto"
                        src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                        alt="Uber"
                    />
                    <div className="flex flex-col items-end">
                        <p className="text-sm text-gray-600 font-semibold">Saarthak Sharma</p>
                        <p className="text-base font-bold">KA-05-MH-1234</p>
                        <h3 className="text-sm text-gray-500">Swift Dzire</h3>
                    </div>
                </div>
                <div className='flex-1 border-t pt-4 flex flex-col justify-between min-h-0'>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <IoLocationSharp size="1.2em" className="text-gray-600 mt-1 flex-shrink-0" />
                            <div className="min-w-0 flex-1">
                                <h3 className="text-base font-semibold">562/11-A</h3>
                                <p className="text-sm text-gray-600 truncate">Aggarwal Sweets, Ghaziabad, U.P.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <GiMoneyStack size="1.2em" className="text-gray-600 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-base font-semibold">₹102</h3>
                                <p className="text-sm text-gray-600">Cash</p>
                            </div>
                        </div>
                    </div>
                    <button className="w-full bg-black text-white py-3 rounded-lg font-semibold mt-4 flex-shrink-0">
                        Make Payment
                    </button>
                </div>
            </div>
        </div>
    );
};
//test commit

export default RideDetails;