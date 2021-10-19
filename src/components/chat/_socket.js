/**
 * Socket
 */

import { io } from "socket.io-client";

const socket = io("http://127.0.0.1:8000/", {
    autoConnect: false
});

if (!socket.connected) {
    socket.connect();
}

socket.on("disconnect", () => {
    socket.connect();
});

export default socket