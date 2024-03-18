class Map {
    private template: {};
    constructor(x: any, y: any, z: any, heat: any) {
        this.template = {
            x: x,
            y: y,
            z: z,
            heat: heat
        };
    }
    getTemplate() {
        return this.template;
    }
    createMap() {
        return new Array<Array<Array<Array<any>>>>();
    }

}