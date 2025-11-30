export class Color {
  public static readonly CYAN = "cyan";
  public static readonly YELLOW = "yellow";
  public static readonly PURPLE = "purple";
  public static readonly GREEN = "green";
  public static readonly RED = "red";
  public static readonly BLUE = "blue";
  public static readonly ORANGE = "orange";

  private name: string;
  private red: number;
  private green: number;
  private blue: number;
  constructor(name: string) {
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
  public getName(): string {
    return this.name;
  }
  public getRed(): number {
    return this.red;
  }
  public getGreen(): number {
    return this.green;
  }
  public getBlue(): number {
    return this.blue;
  }
}