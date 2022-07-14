import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../models/employee-model/employee.model';
import { Hours } from '../models/models-detail/hours.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() currentEmployee;
  @Input() popupActive: boolean;

  buttonConfirm = 'Confirm';

  popupAddHoursActive: boolean = false;

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
      this.currentEmployee.netRate = this.netRateInpF;
    }

    if (this.normalHoursInpF !== null && this.normalHoursInpF !== undefined) {
      this.currentEmployee.normalHours = this.normalHoursInpF;
    }

    if (this.weekendHoursInpF !== null && this.weekendHoursInpF !== undefined) {
      this.currentEmployee.weekendHours = this.weekendHoursInpF;
    }

    this.currentEmployee.salaryNormalHours =
      this.currentEmployee.normalHours * this.currentEmployee.netRate;

    this.currentEmployee.salaryWeekendHours =
      this.currentEmployee.weekendHours * this.currentEmployee.netRate * 1.5;

    this.currentEmployee.totalHours =
      this.currentEmployee.normalHours + this.currentEmployee.weekendHours;

    this.currentEmployee.totalSalary =
      this.currentEmployee.salaryNormalHours +
      this.currentEmployee.salaryWeekendHours;

    this.currentEmployee.totalPay =
      this.currentEmployee.totalSalary +
      this.currentEmployee.totalAdditions -
      this.currentEmployee.totalDeductions;

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
      this.currentEmployee.additionOwnHouse = this.additionOwnHouseInpF;
    }
    if (
      this.additionQuaterBonusInpF !== null &&
      this.additionQuaterBonusInpF !== undefined
    ) {
      this.currentEmployee.additionQuaterBonus = this.additionQuaterBonusInpF;
    }
    if (
      this.additionSicknessBenefitInpF !== null &&
      this.additionSicknessBenefitInpF !== undefined
    ) {
      this.currentEmployee.additionSicknessBenefit =
        this.additionSicknessBenefitInpF;
    }

    this.currentEmployee.totalAdditions =
      this.currentEmployee.additionOwnHouse +
      this.currentEmployee.additionQuaterBonus +
      this.currentEmployee.additionSicknessBenefit;

    this.currentEmployee.totalPay =
      this.currentEmployee.totalSalary +
      this.currentEmployee.totalAdditions -
      this.currentEmployee.totalDeductions;

    this.ownHouseActive = false;
    this.changeQuaterBonusActive = false;
    this.changeSicknessBenefitActive = false;
    this.additionOwnHouseInpF = null;
    this.additionQuaterBonusInpF = null;
    this.additionSicknessBenefitInpF = null;
  }

  changeDeductions() {
    if (this.deductionCarInpF !== null && this.deductionCarInpF !== undefined) {
      this.currentEmployee.deductionCar = this.deductionCarInpF;
    }

    if (
      this.deductionTrainingInpF !== null &&
      this.deductionTrainingInpF !== undefined
    ) {
      this.currentEmployee.deductionTraining = this.deductionTrainingInpF;
    }

    this.currentEmployee.totalDeductions =
      this.currentEmployee.deductionCar +
      this.currentEmployee.deductionTraining;

    this.currentEmployee.totalPay =
      this.currentEmployee.totalSalary +
      this.currentEmployee.totalAdditions -
      this.currentEmployee.totalDeductions;

    this.deductionCarInpF = null;
    this.deductionTrainingInpF = null;
    this.carDeductionActive = false;
    this.trainingDeductionActive = false;
  }

  ngOnInit(): void {}
}
