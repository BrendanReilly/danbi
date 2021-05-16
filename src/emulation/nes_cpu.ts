export class NesCpu {

    /**
     * CPU Status Register
     */
    private _statusRegister: u8;

    /**
     * Opcode lookup table
     */
    private _opcodes: { [opcode: number]: (args: i8[]) => void };

    public constructor() {
        this._opcodes = {};
        this._statusRegister = 0;
    }

    /**
     * Executes the passed opcode with  the passed arguments.
     * @param opcode 
     */
    public execute(opcode: i8, ...args: []): void {
        this._opcodes[opcode](args);
    }



}