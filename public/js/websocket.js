import { io } from "socket.io-client";
import { showAlert } from "./utils.js";

const socket = io("/", {
    withCredentials: true
})

socket.on("connected", () => {
    console.log("Connected to the server");
});

socket.on("mail-sent", () => {
    console.log("Email sent successfully");
    showAlert("Email sent successfully!", false);
})

socket.on("mail-error", () => {
    console.error("Failed to send email");
    showAlert("Failed to send email. Please try again later.");
});