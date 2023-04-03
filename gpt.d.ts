type possibleEvents = 'ready' | 'data' | 'exit'

declare class GPT4ALL {
  constructor(app: string)
  ask(msg: string): Promise<string>
}

export default GPT4ALL;
