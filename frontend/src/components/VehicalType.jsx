import { Listbox } from '@headlessui/react'
import { useState } from 'react'

const vehicleTypes = ['car', 'bike', 'auto']

export default function VehicalType({ vehicle, setVehicle }) {
    const selectedType = vehicle.vehicalType

    const handleChange = (value) => {
        setVehicle({ ...vehicle, vehicalType: value })
    }

    return (
        <div className="w-full">
            <Listbox value={selectedType} onChange={handleChange}>
                <div className="relative">
                    {/* Button */}
                    <Listbox.Button className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 text-left text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                        {selectedType ? selectedType.charAt(0).toUpperCase() + selectedType.slice(1) : 'Select Vehicle Type'}
                    </Listbox.Button>

                    {/* Options */}
                    <Listbox.Options className="absolute mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 z-10 focus:outline-none">
                        {vehicleTypes.map((type) => (
                            <Listbox.Option
                                key={type}
                                value={type}
                                className={({ active }) =>
                                    `cursor-pointer select-none px-4 py-2 text-sm ${active ? 'bg-blue-100 text-blue-800' : 'text-gray-700'
                                    }`
                                }
                            >
                                {type.charAt(0).toUpperCase() + type.slice(1)}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                </div>
            </Listbox>
        </div>
    )
}
