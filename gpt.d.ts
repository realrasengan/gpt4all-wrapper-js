type possibleEvents = 'ready' | 'data' | 'exit'

declare class GPT4ALL {
  constructor(app: string)
  on(type: possibleEvents , func: (...arg0: any) => {}): void
  ask(msg: string): Promise<string>
}

export default GPT4ALL;