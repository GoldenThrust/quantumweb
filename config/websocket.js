class WebSocket {
    constructor() {
        this.io = null;
        this.socket = null;
        this.room = null;
        this.connectionPromise = null;
    }

    async getConnection(io) {
        this.io = io;

        this.connectionPromise = new Promise((resolve, reject) => {
            io.on("connection", (socket) => {
                this.socket = socket;
                const clientIp = socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;

                socket.join(clientIp);

                this.room = io.to(clientIp);
                console.log("Successfully connected to WebSocket!");

                socket.emit("connected");

                resolve(true);

                socket.on("disconnect", async () => {
                    console.log(`Client with IP ${await this.getSocketIp()} disconnected`);
                });
            });

            // setTimeout(() => {
            //     if (!this.socket) {
            //         reject(new Error("WebSocket connection failed"));
            //     }
            // }, 5000);
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

    mailNotification(sent = true) {
        if (sent) {
            // this.io.to(this.clientIp).emit('mail-sent', this.clientIp);
            this.room.emit('mail-sent');
        } else {
            this.room.emit('mail-error');
        }
    }
}

const websocket = new WebSocket();
export default websocket;
