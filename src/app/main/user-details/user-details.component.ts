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
  @Input() Crew;

  @Output() outputCrew = new EventEmitter();
  @Input() dataSource;

  @Input() popupActive: boolean;
  @Input() changeNettoActive: boolean;
  @Input() changeNormalHoursActive: boolean;
  @Input() changeWeekendHoursActive: boolean;
  @Input() ownHouseActive: boolean;
  @Input() changeQuaterBonusActive: boolean;
  @Input() changeSicknessBenefitActive: boolean;
  @Input() carDeductionActive: boolean;
  @Input() trainingDeductionActive: boolean;

  @Input() buttonConfirm: string;

  netRateInpF: number;
  normalHoursInpF: number;
  weekendHoursInpF: number;
  additionOwnHouseInpF: number;
  additionQuaterBonusInpF: number;
  additionSicknessBenefitInpF: number;
  deductionCarInpF: number;
  deductionTrainingInpF: number;

  @Output() outputHoursInpF = new EventEmitter();
  @Output() outputAdditionsInpF = new EventEmitter();
  @Output() outputDeductionsInpF = new EventEmitter();

  @Output() outputPopupActive = new EventEmitter();

  sendCrew() {
    this.outputCrew.emit(this.Crew);
  }

  sendPopupActive() {
    this.popupActive = false;
    this.outputPopupActive.emit(this.popupActive);
  }

  constructor() {}

  sendHoursInpF() {
    this.outputHoursInpF.emit({
      netRateInpF: this.netRateInpF,
      normalHoursInpF: this.normalHoursInpF,
      weekendHoursInpF: this.weekendHoursInpF,
    });

    this.Crew.map((val) => {
      if (val.id === this.currentEmployee.id) {
        if (this.netRateInpF !== null && this.netRateInpF !== undefined) {
          val.netRate = this.netRateInpF;
          this.currentEmployee.netRate = this.netRateInpF;
        }

        if (
          this.normalHoursInpF !== null &&
          this.normalHoursInpF !== undefined
        ) {
          val.normalHours = this.normalHoursInpF;
          this.currentEmployee.normalHours = this.normalHoursInpF;
        }

        if (
          this.weekendHoursInpF !== null &&
          this.weekendHoursInpF !== undefined
        ) {
          val.weekendHours = this.weekendHoursInpF;
          this.currentEmployee.weekendHours = this.weekendHoursInpF;
        }

        val.salaryNormalHours =
          this.currentEmployee.normalHours * this.currentEmployee.netRate;
        this.currentEmployee.salaryNormalHours =
          this.currentEmployee.normalHours * this.currentEmployee.netRate;

        val.salaryWeekendHours =
          this.currentEmployee.weekendHours *
          this.currentEmployee.netRate *
          1.5;
        this.currentEmployee.salaryWeekendHours =
          this.currentEmployee.weekendHours *
          this.currentEmployee.netRate *
          1.5;

        val.totalHours =
          this.currentEmployee.normalHours + this.currentEmployee.weekendHours;
        this.currentEmployee.totalHours =
          this.currentEmployee.normalHours + this.currentEmployee.weekendHours;

        val.totalSalary =
          this.currentEmployee.salaryNormalHours +
          this.currentEmployee.salaryWeekendHours;
        this.currentEmployee.totalSalary =
          this.currentEmployee.salaryNormalHours +
          this.currentEmployee.salaryWeekendHours;

        val.totalPay =
          this.currentEmployee.totalSalary +
          this.currentEmployee.totalAdditions -
          this.currentEmployee.totalDeductions;
        this.currentEmployee.totalPay =
          this.currentEmployee.totalSalary +
          this.currentEmployee.totalAdditions -
          this.currentEmployee.totalDeductions;
      }
    });
    this.changeNettoActive = false;
    this.changeNormalHoursActive = false;
    this.changeWeekendHoursActive = false;

    this.netRateInpF = null;
    this.normalHoursInpF = null;
    this.weekendHoursInpF = null;
    console.log(this.currentEmployee);
  }

  sendAdditionsInpF() {
    this.outputAdditionsInpF.emit({
      additionOwnHouseInpF: this.additionOwnHouseInpF,
      additionQuaterBonusInpF: this.additionQuaterBonusInpF,
      additionSicknessBenefitInpF: this.additionSicknessBenefitInpF,
    });

    this.Crew.map((val) => {
      if (val.id === this.currentEmployee.id) {
        if (
          this.additionOwnHouseInpF !== null &&
          this.additionOwnHouseInpF !== undefined
        ) {
          val.additionOwnHouse = this.additionOwnHouseInpF;
          this.currentEmployee.additionOwnHouse = this.additionOwnHouseInpF;
        }
        if (
          this.additionQuaterBonusInpF !== null &&
          this.additionQuaterBonusInpF !== undefined
        ) {
          val.additionQuaterBonus = this.additionQuaterBonusInpF;
          this.currentEmployee.additionQuaterBonus =
            this.additionQuaterBonusInpF;
        }
        if (
          this.additionSicknessBenefitInpF !== null &&
          this.additionSicknessBenefitInpF !== undefined
        ) {
          val.additionSicknessBenefit = this.additionSicknessBenefitInpF;
          this.currentEmployee.additionSicknessBenefit =
            this.additionSicknessBenefitInpF;
        }

        val.totalAdditions =
          this.currentEmployee.additionOwnHouse +
          this.currentEmployee.additionQuaterBonus +
          this.currentEmployee.additionSicknessBenefit;
        this.currentEmployee.totalAdditions =
          this.currentEmployee.additionOwnHouse +
          this.currentEmployee.additionQuaterBonus +
          this.currentEmployee.additionSicknessBenefit;

        val.totalPay =
          this.currentEmployee.totalSalary +
          this.currentEmployee.totalAdditions -
          this.currentEmployee.totalDeductions;
        this.currentEmployee.totalPay =
          this.currentEmployee.totalSalary +
          this.currentEmployee.totalAdditions -
          this.currentEmployee.totalDeductions;
      }
    });
    this.ownHouseActive = false;
    this.changeQuaterBonusActive = false;
    this.changeSicknessBenefitActive = false;
    this.additionOwnHouseInpF = null;
    this.additionQuaterBonusInpF = null;
    this.additionSicknessBenefitInpF = null;
  }

  sendDeductionsInpF() {
    this.outputDeductionsInpF.emit({
      deductionCarInpF: this.deductionCarInpF,
      deductionTrainingInpF: this.deductionTrainingInpF,
    });
    this.Crew.map((val) => {
      if (val.id === this.currentEmployee.id) {
        if (
          this.deductionCarInpF !== null &&
          this.deductionCarInpF !== undefined
        ) {
          val.deductionCar = this.deductionCarInpF;
          this.currentEmployee.deductionCar = this.deductionCarInpF;
        }

        if (
          this.deductionTrainingInpF !== null &&
          this.deductionTrainingInpF !== undefined
        ) {
          val.deductionTraining = this.deductionTrainingInpF;
          this.currentEmployee.deductionTraining = this.deductionTrainingInpF;
        }

        val.totalDeductions =
          this.currentEmployee.deductionCar +
          this.currentEmployee.deductionTraining;
        this.currentEmployee.totalDeductions =
          this.currentEmployee.deductionCar +
          this.currentEmployee.deductionTraining;

        val.totalPay =
          this.currentEmployee.totalSalary +
          this.currentEmployee.totalAdditions -
          this.currentEmployee.totalDeductions;
        this.currentEmployee.totalPay =
          this.currentEmployee.totalSalary +
          this.currentEmployee.totalAdditions -
          this.currentEmployee.totalDeductions;
      }
    });
    this.deductionCarInpF = null;
    this.deductionTrainingInpF = null;
    this.carDeductionActive = false;
    this.trainingDeductionActive = false;
  }

  ngOnInit(): void {}
}
