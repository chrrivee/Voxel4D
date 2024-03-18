class Input {
    x: number;
    y: number;
    z: number;
    heat: String[];


    constructor(x: number, y: number, z: number, heat: String[] ) {
        this.x = x;
        this.y = y;
        this.z = z;
        if(heat.length != 2) throw new Error("Heat array must have only two elements");
        else this.heat = heat;
    }
}