import axios from "axios";

export default function getPayment() {
    return axios.get("/payment");
}
