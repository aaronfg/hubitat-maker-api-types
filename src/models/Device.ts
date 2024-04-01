import { Command } from "./Command";

export interface Device {
  name: string;
  label: string;
  type: string;
  id: string;
  date?: string;
  model?: string;
  manufacturer?: string;
  room?: string;
  commands: Command[];
}
