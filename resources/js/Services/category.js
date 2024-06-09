import axios from "axios";

export default function getCategory() {
    return axios.get("/category");
}
