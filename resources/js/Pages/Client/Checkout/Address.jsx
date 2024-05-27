import PrimaryButton from "@/Components/PrimaryButton";
import AddressModal from "./AddressModal";

const Address = ({
    setOpenAddressModal,
    openAddressModal,
    closeAddressModal,
    changeAddress,
    addressData,
}) => {
    return (
        <div className="mb-4 overflow-hidden rounded-t-lg shadow">
            <div className="h-2 bg-slate-800"></div>
            <div className=" bg-white grid grid-cols-[75%,auto] px-4 pt-2 pb-6 gap-x-2">
                <div className="">
                    <p className="mb-2 text-lg font-bold">
                        <i className="fa-solid fa-location-dot"></i> Address for
                        Delivery
                    </p>
                    <p className="mb-2">
                        {addressData.namaPenerima} {addressData.telepon}
                    </p>
                    <p className="text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Atque itaque incidunt officia, quasi accusantium
                        modi exercitationem voluptate. Molestias, nostrum, cum,
                        commodi quisquam dignissimos eligendi asperiores libero
                        ipsam excepturi accusantium aperiam?
                    </p>
                </div>
                <div className="">
                    <PrimaryButton onClick={() => setOpenAddressModal(true)}>
                        Edit
                    </PrimaryButton>
                    <AddressModal
                        show={openAddressModal}
                        closeAddressModal={closeAddressModal}
                        changeAddress={changeAddress}
                    />
                </div>
            </div>
        </div>
    );
};

export default Address;
