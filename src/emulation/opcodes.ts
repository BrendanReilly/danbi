import { NesCpu } from "./nes_cpu";
export type OpCode = (cpu: NesCpu, ...args: number[]) => void;
export const opCodes: { [opCode: number]: OpCode } = {};

// CLC
opCodes[0x18] = (cpu: NesCpu): void => {
    cpu.statusRegister |= 0b10000000;
    return;
}