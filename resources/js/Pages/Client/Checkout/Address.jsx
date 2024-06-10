import PrimaryButton from "@/Components/PrimaryButton";
import AddressModal from "./AddressModal";

export default function Address({
    user,
    customerDetail,
    setCustomerDetail,
    setOpenAddressModal,
    openAddressModal,
    closeAddressModal,
    setRajaongkir,
}) {
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
                    {customerDetail.address.city ? (
                        <>
                            <p className="text-sm">
                                {customerDetail.address.detail},{" "}
                                {customerDetail.address.city},{" "}
                                {customerDetail.address.province},{" "}
                                {customerDetail.address.postal}
                            </p>
                        </>
                    ) : (
                        <p>Belum Memilih Alamat</p>
                    )}
                    <button
                        className="w-full mt-4 btn btn-secondary"
                        onClick={() => setOpenAddressModal(true)}
                    >
                        Edit
                    </button>
                </div>
                <div className="">
                    <AddressModal
                        show={openAddressModal}
                        closeAddressModal={closeAddressModal}
                        setCustomerDetail={setCustomerDetail}
                        setRajaongkir={setRajaongkir}
                    />
                </div>
            </div>
        </div>
    );
}
