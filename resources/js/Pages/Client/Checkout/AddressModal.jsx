import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import axios from "axios";
import { useEffect, useState } from "react";

const AddressModal = ({
    show,
    closeAddressModal,
    setCustomerDetail,
    setRajaongkir,
}) => {
    const [address, setAddress] = useState({
        province: "",
        city: "",
        detail: "",
        postal: "",
    });

    const [detail, setDetail] = useState({
        name: "",
        phone: "",
        address: address,
    });

    const [provinsiData, setProvinsiData] = useState([
        { province_id: "", province: "" },
    ]);

    const [kotaData, setKotaData] = useState([
        {
            city_id: "",
            province_id: "",
            province: "",
            type: "",
            city_name: "",
            postal_code: "",
        },
    ]);
    const [destination, setDestination] = useState(0);

    function submitAddressData(e) {
        e.preventDefault();
        console.log(detail);
        setCustomerDetail({
            ...detail,
            address: address,
        });

        setRajaongkir((prev) => ({
            ...prev,
            destination: destination,
        }));
        closeAddressModal();
    }

    function getProvinsi() {
        axios
            .get("/rajaongkir/getProvinsi")
            .then((response) =>
                setProvinsiData(response.data.rajaongkir.results)
            )
            .catch((e) => console.error(e));
    }

    function getKota(idProvinsi) {
        axios.get("/rajaongkir/getKota/" + idProvinsi).then((response) => {
            const newKotaData = response.data.rajaongkir.results;
            console.log(newKotaData);
            setKotaData(newKotaData);
        });
    }

    function handleDetailChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setDetail((prevDetail) => ({
            ...prevDetail,
            [key]: value,
        }));
    }

    function handleAddressChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setAddress((prevAddress) => ({
            ...prevAddress,
            [key]: value,
        }));
    }

    function handleAddressSelectChange(e) {
        const key = e.target.id;
        const id = e.target.value;
        const name = e.target.selectedOptions[0].getAttribute("data-name");
        setAddress((prevAddress) => ({
            ...prevAddress,
            [key]: name,
        }));
    }

    useEffect(() => {
        getProvinsi();
    }, []);

    useEffect(() => {
        setDetail((prevDetail) => ({
            ...prevDetail,
            address: address,
        }));
    }, [address]);

    return (
        <Modal show={show}>
            <div className="p-8">
                <form onSubmit={submitAddressData}>
                    <div className="flex">
                        <p className="mb-4 text-xl font-semibold">
                            Detail Alamat Penerima
                        </p>
                        <button
                            onClick={closeAddressModal}
                            type="button"
                            className="inline-flex items-center justify-center w-8 h-8 text-sm text-gray-400 bg-transparent rounded-lg hover:bg-gray-200 hover:text-gray-900 ms-auto dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="">
                            <label htmlFor="">Provinsi</label>

                            <select
                                name=""
                                id="province"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                onChange={(e) => {
                                    getKota(e.target.value);
                                    handleAddressSelectChange(e);
                                }}
                            >
                                <option value="">-- Provinsi --</option>
                                {provinsiData.map((provinsi) => (
                                    <option
                                        value={provinsi.province_id}
                                        key={provinsi.province_id}
                                        data-name={provinsi.province}
                                    >
                                        {provinsi.province}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="">
                            <label htmlFor="">Kota / Kabupaten</label>
                            <select
                                name=""
                                id="city"
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                                onChange={(e) => {
                                    handleAddressSelectChange(e);
                                    setDestination(e.target.value);
                                }}
                            >
                                <option value="">
                                    Silahkan Pilih Provinsi terlebih Dahulu
                                </option>
                                {kotaData.map((kota) => (
                                    <option
                                        value={kota.city_id}
                                        key={kota.city_id}
                                        data-name={kota.city_name}
                                    >
                                        {kota.city_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">Kode Pos</label>
                        <TextInput
                            className={"w-full"}
                            id="postal"
                            type="number"
                            onChange={handleAddressChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">
                            Detail Alamat ( Jalan / Perumahan, Kecamatan,
                            Kelurahan )
                        </label>
                        <textarea
                            name=""
                            id="detail"
                            onChange={handleAddressChange}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            required
                        ></textarea>
                    </div>

                    <PrimaryButton>Simpan</PrimaryButton>
                </form>
            </div>
        </Modal>
    );
};

export default AddressModal;
