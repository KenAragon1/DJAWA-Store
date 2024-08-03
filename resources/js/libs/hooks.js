import { useState } from "react";

export const useImagePreview = (image = "") => {
    const [imagePreview, setImagePreview] = useState(image);

    const handleImagePreview = (e) => {
        setImagePreview(URL.createObjectURL(e.target.files[0]));
    };

    return { imagePreview, handleImagePreview };
};
