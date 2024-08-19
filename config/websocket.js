class WebSocket {
    constructor() {
        this.io = null;
        this.socket = null;
        this.connectionPromise = null;
    }

    async getConnection(io) {
        this.io = io;

        // Create a promise that resolves when a client connects
        this.connectionPromise = new Promise((resolve, reject) => {
            io.on("connection", (socket) => {
                this.socket = socket; // Store the connected socket
                console.log("Successfully connected to WebSocket!");

                socket.emit("connected");

                resolve(socket); // Resolve the promise with the socket

                // Handle disconnect event
                socket.on("disconnect", async () => {
                    console.log(`Client with IP ${await this.getSocketIp()} disconnected`);
                });
            });

            // Optional: Add timeout to handle cases where no connection occurs
            setTimeout(() => {
                if (!this.socket) {
                    reject(new Error("WebSocket connection failed"));
                }
            }, 5000); // 5 seconds timeout for connection
        });

        return this.connectionPromise;
    }

    async getSocketIp() {
        if (!this.connectionPromise) {
            throw new Error("WebSocket connection is not initialized yet");
        }

        await this.connectionPromise;

        return this.socket.handshake.headers['x-forwarded-for'] || this.socket.handshake.address;
    }
}

const websocket = new WebSocket();
export default websocket;
