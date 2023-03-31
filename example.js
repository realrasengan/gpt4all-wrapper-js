import GPT4 from './gpt.js';

let GPT = new GPT4('./gpt4all-lora-quantized-OSX-m1');
GPT.on('ready',async ()=>{
  console.log(await GPT.ask("What is the capital of Korea?"));
  console.log(await GPT.ask("Are you an AI?"));
});
