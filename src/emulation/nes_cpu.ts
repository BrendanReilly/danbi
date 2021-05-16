import { OpCode, opCodes } from "./opcodes";

export class NesCpu {

    /**
     * CPU Status Register
     */
    private _statusRegister: u8;

    private _xRegister: u8;

    private _yRegister: u8;

    /**
     * Opcode lookup table
     */
    private _opCodes: { [opcode: number]: OpCode };

    public get xRegister(): u8 {
        return this._xRegister;
    }

    public set xRegister(val: u8) {
        this._xRegister = val;
    }

    public get yRegister(): u8 {
        return this._yRegister;
    }

    public set yRegister(val: u8) {
        this._yRegister = val;
    }

    public get statusRegister(): u8 {
        return this._statusRegister;
    }

    public set statusRegister(val: u8) {
        this._statusRegister = val;
    }

    public constructor() {
        this._opCodes = opCodes;
        this._statusRegister = 0;
    }

    /**
     * Executes the passed opcode with  the passed arguments.
     * @param opcode 
     */
    public execute(opcode: u8, ...args: (u8[] | i8[])): void {
        // execute and update status register changes
        switch (args.length) {
            case 0:
                this._opCodes[opcode](this);
                break;
            case 1:
                this._opCodes[opcode](this, args[0]);
                break;
            case 2:
                this._opCodes[opcode](this, args[0], args[1]);
                break;
            default:
                break;
        }
    }

}