import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import axios from "axios";
import { useEffect, useState } from "react";

const AddressModal = ({ show, closeAddressModal, changeAddress }) => {
    const [addressData, SetAddressData] = useState({
        namaPenerima: "",
        telepon: "",
        provinsi: "",
        kota: "",
        kodepos: "",
        detail: "",
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

    function submitAddressData(e) {
        e.preventDefault();
        console.log(addressData);
        changeAddress(addressData);
        closeAddressModal();
    }

    function getProvinsi() {
        axios
            .get("/checkout/getProvinsi")
            .then((response) =>
                setProvinsiData(response.data.rajaongkir.results)
            )
            .catch((e) => console.error(e));
    }

    function getKota(idProvinsi) {
        axios.get("/checkout/getKota/" + idProvinsi).then((response) => {
            const newKotaData = response.data.rajaongkir.results;
            console.log(newKotaData);
            setKotaData(newKotaData);
        });
    }

    function handleProvinsiChange(e) {
        handleChange(e);
        const idProvinsi = e.target.value;
        getKota(idProvinsi);
    }

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;

        SetAddressData((prevAddressData) => ({
            ...prevAddressData,
            [key]: value,
        }));
    }

    useEffect(() => {
        getProvinsi();
    }, []);

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
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
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

                    <div className="mb-4">
                        <label htmlFor="">Nama Penerima</label>
                        <TextInput
                            className={"w-full"}
                            id="namaPenerima"
                            value={addressData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="">No Telepon</label>
                        <TextInput
                            className={"w-full"}
                            id="telepon"
                            type="number"
                            value={addressData.telepon}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="">
                            <label htmlFor="">Provinsi</label>

                            <select
                                name=""
                                id="provinsi"
                                onChange={handleProvinsiChange}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            >
                                <option value="">-- Provinsi --</option>
                                {provinsiData.map((provinsi) => (
                                    <option value={provinsi.province_id}>
                                        {provinsi.province}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="">
                            <label htmlFor="">Kota / Kabupaten</label>
                            <select
                                name=""
                                id="kota"
                                onChange={handleChange}
                                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                required
                            >
                                <option value="">
                                    Silahkan Pilih Provinsi terlebih Dahulu
                                </option>
                                {kotaData.map((kota) => (
                                    <option value={kota.city_id}>
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
                            id="kodepos"
                            type="number"
                            value={addressData.kodepos}
                            onChange={handleChange}
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
                            value={addressData.name}
                            onChange={handleChange}
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
