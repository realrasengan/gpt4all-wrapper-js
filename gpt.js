const { spawn } = require('child_process');
const { EventEmitter } = require("events");

class GPT4ALL extends EventEmitter {
    status = 0;
    buffer = "";
    constructor(app) {
        super();
        this.chat = spawn(app);
        this.chat.stdout.on('data', (data) => {
            let str = data.toString();
            if (str.includes("\x1b[33m")) {
                this.status = 1;
                this.emit("ready");
                this.buffer = "";
            } else if (str.includes(">")) {
                this.emit("data", this.buffer);
                this.buffer = "";
            } else {
                this.buffer += str;
            }
        });
    }
    async ask(msg) {
        if (!this.status) return null;
        this.chat.stdin.write(`${msg}\n`);
        return new Promise(resolve => this.once("data", resolve));
    }
}
module.exports = GPT4ALL;
