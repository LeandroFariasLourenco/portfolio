import { TypewriterClass } from 'typewriter-effect';

export interface ITerminalLine {
  key: string;
  timer: number;
  typeText: (typewriter: TypewriterClass) => void;
}
