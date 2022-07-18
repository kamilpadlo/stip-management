import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee-model/employee.model';
import { Hours } from '../models/models-detail/hours.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() employee;
  @Input() popupActive: boolean;

  buttonConfirm = 'Confirm';

  popupAddHoursActive: boolean = false;

  nettoRateActive: boolean = false;
  normalHoursActive: boolean = false;
  weekendHoursActive: boolean = false;

  ownHouseActive: boolean = false;
  changeQuaterBonusActive: boolean = false;
  changeSicknessBenefitActive: boolean = false;
  carDeductionActive: boolean = false;
  trainingDeductionActive: boolean = false;

  netRateInpF: number;
  normalHoursInpF: number;
  weekendHoursInpF: number;
  additionOwnHouseInpF: number;
  additionQuaterBonusInpF: number;
  additionSicknessBenefitInpF: number;
  deductionCarInpF: number;
  deductionTrainingInpF: number;

  @Output() outputPopupActive = new EventEmitter();
  sendPopupActive() {
    this.popupActive = false;
    this.outputPopupActive.emit(this.popupActive);
  }

  constructor() {}

  changeHours() {
    if (this.netRateInpF !== null && this.netRateInpF !== undefined) {
      this.employee.netRate = this.netRateInpF;
    }

    if (this.normalHoursInpF !== null && this.normalHoursInpF !== undefined) {
      this.employee.normalHours = this.normalHoursInpF;
    }

    if (this.weekendHoursInpF !== null && this.weekendHoursInpF !== undefined) {
      this.employee.weekendHours = this.weekendHoursInpF;
    }

    this.employee.salaryNormalHours =
      this.employee.normalHours * this.employee.netRate;

    this.employee.salaryWeekendHours =
      this.employee.weekendHours * this.employee.netRate * 1.5;

    this.employee.totalHours =
      this.employee.normalHours + this.employee.weekendHours;

    this.employee.totalSalary =
      this.employee.salaryNormalHours + this.employee.salaryWeekendHours;

    this.employee.totalPay =
      this.employee.totalSalary +
      this.employee.totalAdditions -
      this.employee.totalDeductions;

    this.popupAddHoursActive = false;

    this.netRateInpF = null;
    this.normalHoursInpF = null;
    this.weekendHoursInpF = null;
  }

  changeAdditions() {
    if (
      this.additionOwnHouseInpF !== null &&
      this.additionOwnHouseInpF !== undefined
    ) {
      this.employee.additionOwnHouse = this.additionOwnHouseInpF;
    }
    if (
      this.additionQuaterBonusInpF !== null &&
      this.additionQuaterBonusInpF !== undefined
    ) {
      this.employee.additionQuaterBonus = this.additionQuaterBonusInpF;
    }
    if (
      this.additionSicknessBenefitInpF !== null &&
      this.additionSicknessBenefitInpF !== undefined
    ) {
      this.employee.additionSicknessBenefit = this.additionSicknessBenefitInpF;
    }

    this.employee.totalAdditions =
      this.employee.additionOwnHouse +
      this.employee.additionQuaterBonus +
      this.employee.additionSicknessBenefit;

    this.employee.totalPay =
      this.employee.totalSalary +
      this.employee.totalAdditions -
      this.employee.totalDeductions;

    this.additionOwnHouseInpF = null;
    this.additionQuaterBonusInpF = null;
    this.additionSicknessBenefitInpF = null;
  }

  changeDeductions() {
    if (this.deductionCarInpF !== null && this.deductionCarInpF !== undefined) {
      this.employee.deductionCar = this.deductionCarInpF;
    }

    if (
      this.deductionTrainingInpF !== null &&
      this.deductionTrainingInpF !== undefined
    ) {
      this.employee.deductionTraining = this.deductionTrainingInpF;
    }

    this.employee.totalDeductions =
      this.employee.deductionCar + this.employee.deductionTraining;

    this.employee.totalPay =
      this.employee.totalSalary +
      this.employee.totalAdditions -
      this.employee.totalDeductions;

    this.deductionCarInpF = null;
    this.deductionTrainingInpF = null;
  }

  ngOnInit(): void {}
}
