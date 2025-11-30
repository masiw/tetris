export class Color {
    static CYAN = "cyan";
    static YELLOW = "yellow";
    static PURPLE = "purple";
    static GREEN = "green";
    static RED = "red";
    static BLUE = "blue";
    static ORANGE = "orange";
    name;
    red;
    green;
    blue;
    constructor(name) {
        this.name = name;
        switch (name) {
            case Color.CYAN:
                this.red = 0;
                this.green = 255;
                this.blue = 255;
                break;
            case Color.YELLOW:
                this.red = 255;
                this.green = 255;
                this.blue = 0;
                break;
            case Color.PURPLE:
                this.red = 128;
                this.green = 0;
                this.blue = 128;
                break;
            case Color.GREEN:
                this.red = 0;
                this.green = 255;
                this.blue = 0;
                break;
            case Color.RED:
                this.red = 255;
                this.green = 0;
                this.blue = 0;
                break;
            case Color.BLUE:
                this.red = 0;
                this.green = 0;
                this.blue = 255;
                break;
            case Color.ORANGE:
                this.red = 255;
                this.green = 165;
                this.blue = 0;
                break;
            default:
                throw new Error(`Unknown color name: ${name}`);
        }
    }
    getName() {
        return this.name;
    }
    getRed() {
        return this.red;
    }
    getGreen() {
        return this.green;
    }
    getBlue() {
        return this.blue;
    }
}
//# sourceMappingURL=Color.js.map