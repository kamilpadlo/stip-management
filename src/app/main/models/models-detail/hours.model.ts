export class Hours {
  public netRate: number;
  public normalHours: number;
  public weekendHours: number;

  constructor(netRate: number, normalHours: number, weekendHours: number) {
    this.netRate = netRate;
    this.normalHours = normalHours;
    this.weekendHours = weekendHours;
  }
}
