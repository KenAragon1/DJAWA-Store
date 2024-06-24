import PrimaryButton from "@/Components/PrimaryButton";
import AddressModal from "./AddressModal";
import { useState } from "react";

export default function Address({
    user,
    addresses,
    setCustomerDetail,
    addressString,
}) {
    const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
    function closeModal() {
        setIsAddressModalOpen(false);
    }

    return (
        <div className="mb-4 overflow-hidden border border-gray-300 rounded-lg">
            <div className="px-4 pt-2 pb-6 bg-white ">
                <div className="">
                    <p className="mb-2 text-lg font-bold text-secondary">
                        <i className="fa-solid fa-location-dot"></i> Address for
                        Delivery
                    </p>
                    <p className="mb-2">{user.name}</p>
                    <p className="mb-2">{user.email}</p>

                    {addressString ? (
                        addressString
                    ) : (
                        <p>Belum Memilih Alamat</p>
                    )}

                    <button
                        onClick={() => setIsAddressModalOpen(true)}
                        className="w-full mt-2 btn btn-secondary"
                    >
                        Edit
                    </button>
                </div>
                <div className="">
                    <AddressModal
                        addresses={addresses}
                        setCustomerDetail={setCustomerDetail}
                        isOpen={isAddressModalOpen}
                        closeModal={closeModal}
                    />
                </div>
            </div>
        </div>
    );
}
