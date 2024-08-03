import { useForm as inertiaUseForm } from "@inertiajs/react";

export default function useForm(values) {
    const { data, setData, errors, processing } = inertiaUseForm(values);

    const handleChange = (e) => {
        e.preventDefault();
        const { type } = e.target;
        switch (type) {
            case "file":
                return handleInputFileChange(e, setData);
            default:
                return handleInputTextChange(e, setData);
        }
    };

    return { data, errors, processing, handleChange };
}

function handleInputTextChange(e, setData) {
    const { name, value } = e.target;
    setData((prev) => ({
        ...prev,
        [name]: value,
    }));
}

function handleInputFileChange(e, setData) {
    const { name, files } = e.target;
    setData((prev) => ({
        ...prev,
        [name]: files[0],
    }));
}
