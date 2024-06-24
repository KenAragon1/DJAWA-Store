import { Link } from "@inertiajs/react";
import { useState } from "react";

export default function AddressModal({
    addresses,
    setCustomerDetail,
    isOpen,
    closeModal,
}) {
    const [selectedAddress, setSelectedAddress] = useState(null);
    console.log(selectedAddress);

    function submitAddress(e) {
        e.preventDefault();
        setCustomerDetail((prev) => ({ ...prev, address: selectedAddress }));
    }

    return (
        <>
            <input
                type="checkbox"
                id="my_modal_6"
                className="modal-toggle"
                checked={isOpen}
            />
            <div className=" modal modal-scroll" role="dialog">
                <div className="max-w-2xl modal-box">
                    <h3 className="mb-2 text-lg font-bold">My Addresses</h3>
                    <Link
                        href={route("profile.edit")}
                        className="mb-2 rounded-none btn btn-secondary btn-sm"
                    >
                        Configure My Address
                    </Link>
                    <div className="">
                        {addresses?.map((address) => (
                            <div
                                className={` border rounded-lg  mb-2  ${
                                    selectedAddress?.id_address ===
                                    address.id_address
                                        ? "border-secondary border-2"
                                        : "border-gray-300"
                                }`}
                            >
                                <label className="flex items-center p-4 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="address"
                                        value={address.id_address}
                                        checked={
                                            selectedAddress?.id_address ==
                                            address.id_address
                                        }
                                        onChange={() =>
                                            setSelectedAddress(address)
                                        }
                                        className="invisible"
                                    />

                                    <div>
                                        <p className="text-lg font-semibold">
                                            {address.label}
                                        </p>
                                        <p>
                                            {address.detail +
                                                ", " +
                                                address.city +
                                                ", " +
                                                address.province +
                                                ", " +
                                                address.zip}
                                        </p>
                                    </div>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="modal-action">
                        <buton onClick={closeModal} className="btn">
                            Close!
                        </buton>
                        <button
                            onClick={(e) => {
                                submitAddress(e);
                                closeModal();
                            }}
                            disabled={!selectedAddress}
                            className="btn btn-secondary"
                        >
                            Use This Addess
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
