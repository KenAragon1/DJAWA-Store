import { useState } from "react";

export default function Shipping({ shippingOption }) {
    console.log(shippingOption);

    const options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
    ];

    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    return (
        <div className="p-8">
            <p className="mb-4 text-xl font-bold">Pengiriman</p>
            <div className="grid grid-cols-2">
                {shippingOption.map((option) => (
                    <div className="relative p-4 border hover:cursor-pointer">
                        <input
                            type="radio"
                            name="shipping"
                            id="shipping-radio"
                        />
                        <label htmlFor="shipping-radio">JNE</label>
                        <div className="text-sm">
                            <p>Jenis Pelayanan : {option.service}</p>
                            <p>Harga : Rp {option.cost[0].value}</p>
                            <p>
                                Estimasi Pengiriman : {option.cost[0].etd} Hari
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col space-y-4">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className={`flex items-center p-4 rounded-lg border border-gray-200 cursor-pointer ${
                            selectedOption === option.value
                                ? "bg-blue-200 border-blue-500"
                                : "bg-white"
                        }`}
                        onClick={() => handleOptionChange(option.value)}
                    >
                        <input
                            type="radio"
                            className="hidden"
                            value={option.value}
                            checked={selectedOption === option.value}
                            readOnly
                        />
                        <label className="ml-2 text-base">{option.label}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}
