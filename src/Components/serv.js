import axios from "axios";
export async function sendData(title, description, deadline){
    await axios.post("http://localhost:9999", {title, description, deadline, body: "create"})

}