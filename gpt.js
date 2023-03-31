import { spawn } from 'child_process';
import events from 'events';

class GPT4ALL {
  #chat;
  #status=0;
  #e;
  #buffer;
  constructor(app) {
    this.#chat = spawn(app);

    this.#e = new events.EventEmitter();

    this.#chat.stdout.on('data', (data) => {
      if(data.toString().includes("\x1b[33m")) {
        this.#status=1;
        this.#e.emit("ready");
        this.#buffer="";
      }
      else if(data.toString().includes(">")) {
        this.#e.emit("data",this.#buffer);
        this.#buffer="";
      }
      else
        this.#buffer+=data.toString();
    });
    this.#chat.on('exit', (code) => { console.error(`${code}`) });
  }
  on(type,func) { this.#e.addListener(type,func); }
  ask(msg) {
    if(this.#status===0)
      return null;
    this.#chat.stdin.write(`${msg}\n`);
    return new Promise((resolve)=>{ this.on("data",(data)=>{ resolve(data) }) });
  }
}

export default GPT4ALL;
