# gpt4all-wrapper-js

This just provides a simple js wrapper around [gpt4all](https://github.com/nomic-ai/gpt4all/).

## Installation and Usage

You need to get gpt4all and put the gpt4.js and example.js in the chat folder.

```
import GPT4 from './gpt.js';

let GPT = new GPT4('./gpt4all-lora-quantized-OSX-m1');
GPT.on('ready',async ()=>{
  console.log(await GPT.ask("What is the capital of Korea?"));
  console.log(await GPT.ask("Are you an AI?"));
});
```
 
## License

MIT

