import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function CreateAddress({
    isCreateAddressModalOpen,
    closeCreateAddressModal,
}) {
    const { data, setData, post, processing, reset, errors } = useForm({
        label: "",
        province: "",
        city: "",
        detail: "",
        zip: "",
    });

    const [provinceOptions, setProvinceOptions] = useState(null);
    const [cityOptions, setCityOptions] = useState(null);

    function submitAddress(e) {
        e.preventDefault();

        post(route("user.address.store"), {
            preserveScroll: true,
            onSuccess: () => {
                closeCreateAddressModal();
                reset("label", "city", "detail", "province", "zip");
            },
        });
    }

    function getProvinsi() {
        axios
            .get("/rajaongkir/getProvinsi")
            .then((response) => {
                setProvinceOptions(response.data.rajaongkir.results);
            })
            .catch((e) => console.error(e));
    }
    function getCity(idProvince) {
        axios.get("/rajaongkir/getKota/" + idProvince).then((response) => {
            setCityOptions(response.data.rajaongkir.results);
        });
    }

    function handleChange(e) {
        setData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    useEffect(() => {
        getProvinsi();
    }, []);

    return (
        <>
            <input
                type="checkbox"
                className="modal-toggle"
                checked={isCreateAddressModalOpen}
            />
            <div className="modal" role="dialog">
                <div className="max-w-3xl modal-box">
                    <h3 className="mb-2 text-lg font-bold">
                        Create New Address
                    </h3>
                    <div>
                        <form>
                            <div className="mb-2">
                                <label htmlFor="">
                                    Address Label (such as Home, Office)
                                </label>
                                <TextInput
                                    className={"w-full"}
                                    name="label"
                                    required
                                    onChange={handleChange}
                                    value={data.label}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-2">
                                <div className="">
                                    <label htmlFor="">Provinsi</label>

                                    <select
                                        name="province"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                        onChange={(e) => {
                                            handleChange(e);
                                            getCity(
                                                e.target.options[
                                                    e.target.selectedIndex
                                                ].dataset.provinceId
                                            );
                                        }}
                                    >
                                        <option value="" data-province-id="">
                                            -- Provinsi --
                                        </option>
                                        {provinceOptions?.map((option) => (
                                            <option
                                                value={option.province}
                                                data-province-id={
                                                    option.province_id
                                                }
                                            >
                                                {option.province}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="">
                                    <label htmlFor="">Kota / Kabupaten</label>
                                    <select
                                        name="city"
                                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                        required
                                        onChange={handleChange}
                                    >
                                        <option value="">
                                            Silahkan Pilih Provinsi terlebih
                                            Dahulu
                                        </option>
                                        {cityOptions?.map((option) => (
                                            <option value={option.city}>
                                                {option.city_name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Kode Pos</label>
                                <TextInput
                                    className={"w-full"}
                                    name="zip"
                                    type="number"
                                    required
                                    onChange={handleChange}
                                    value={data.zip}
                                />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">
                                    Detail Alamat ( Jalan / Perumahan,
                                    Kecamatan, Kelurahan )
                                </label>
                                <textarea
                                    name="detail"
                                    onChange={handleChange}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    required
                                    value={data.detail}
                                ></textarea>
                            </div>
                        </form>{" "}
                    </div>
                    <div className="modal-action">
                        <button
                            className="btn "
                            onClick={closeCreateAddressModal}
                        >
                            Close
                        </button>
                        <button
                            className="btn btn-secondary "
                            onClick={submitAddress}
                        >
                            Create
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
