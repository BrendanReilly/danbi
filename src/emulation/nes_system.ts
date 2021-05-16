import { NesCpu } from "./nes_cpu";
import { NesMemory } from "./nes_memory";
import { NesPpu } from "./nes_ppu";

export class NesSystem {

    private _cpu: NesCpu;
    private _memory: NesMemory;
    private _ppu: NesPpu;

    /**
     * 
     */
    public constructor() {
        this._cpu = new NesCpu()
        this._memory = new NesMemory()
        this._ppu = new NesPpu();
    }


}