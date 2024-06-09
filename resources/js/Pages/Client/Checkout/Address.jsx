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
        <div className="mb-4 overflow-hidden rounded-t-lg shadow">
            <div className="h-2 bg-slate-800"></div>
            <div className=" bg-white grid grid-cols-[75%,auto] px-4 pt-2 pb-6 gap-x-2">
                <div className="">
                    <p className="mb-2 text-lg font-bold">
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
                </div>
                <div className="">
                    <PrimaryButton onClick={() => setOpenAddressModal(true)}>
                        Edit
                    </PrimaryButton>
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
