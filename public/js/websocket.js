import { io } from "https://cdn.socket.io/4.7.5/socket.io.esm.min.js";
import { showAlert } from "./utils.js";

const socket = io("/", {
    withCredentials: true
})

socket.on("connected", () => {
    showAlert("Connected to the server", false)
    console.log("Connected to the server");
});

