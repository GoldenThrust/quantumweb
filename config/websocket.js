class WebSocket {
    constructor() {
        this.io = null;
        this.socket = null;
        this.room = null;
        this.connectionPromise = null;
        this.connectedUser = 0;
    }

    async getConnection(io) {
        this.io = io;

        this.connectionPromise = new Promise((resolve, reject) => {
            io.on("connection", (socket) => {
                this.connectedUser++;
                this.socket = socket;
                const clientIp = socket.handshake.headers['x-forwarded-for'] || socket.handshake.address;

                socket.join(clientIp);

                this.room = io.to(clientIp);

                io.emit("connected", this.connectedUser);

                resolve(true);

                socket.on("disconnect", async () => {
                    if (this.connectedUser > 0) {
                        this.connectedUser--;
                        io.emit("connected", this.connectedUser);
                    }

                    console.log(`Client with IP ${await this.getSocketIp()} disconnected`);
                });
            });
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
