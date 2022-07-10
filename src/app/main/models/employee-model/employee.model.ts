// import { Output } from '@angular/core';
// import { EventEmitter } from 'stream';

export class Employee {
  constructor(
    public id: string,
    public name: string,
    public surname: string,
    public netRate: number,
    public profession?: string,
    public normalHours?: number,
    public weekendHours?: number,
    public salaryNormalHours?: number,
    public salaryWeekendHours?: number,
    public additionOwnHouse?: number,
    public additionQuaterBonus?: number,
    public additionSicknessBenefit?: number,
    public deductionCar?: number,
    public deductionTraining?: number,
    public totalHours?: number,
    public totalSalary?: number,
    public totalAdditions?: number,
    public totalDeductions?: number,
    public totalPay?: number
  ) {}
}
