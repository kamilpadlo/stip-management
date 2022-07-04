import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../employee-model/employee.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  @Input() Crew;
  @Input() dataSource;
  @Input() counter;

  @Input() popupActive: boolean;
  @Input() changeNettoActive: boolean;
  @Input() changeNormalHoursActive: boolean;
  @Input() changeWeekendHoursActive: boolean;
  @Input() ownHouseActive: boolean;
  @Input() changeQuaterBonusActive: boolean;
  @Input() changeSicknessBenefitActive: boolean;
  @Input() carDeductionActive: boolean;
  @Input() trainingDeductionActive: boolean;

  @Input() id: string;
  @Input() name: string;
  @Input() surname: string;
  @Input() profession: string;

  @Input() netRate: number;
  @Output() outputNetRate = new EventEmitter();

  @Input() normalHours: number;
  @Output() outputNormalHours = new EventEmitter();

  @Input() weekendHours: number;
  @Output() outputWeekendHours = new EventEmitter();

  @Input() salaryNormalHours: number;
  @Output() outputSalaryNormalHours = new EventEmitter();

  @Input() salaryWeekendHours: number;
  @Output() outputSalaryWeekendHours = new EventEmitter();

  @Input() additionOwnHouse: number;
  @Output() outputAdditionOwnHouse = new EventEmitter();

  @Input() additionQuaterBonus: number;
  @Output() outputAdditionQuaterBonus = new EventEmitter();

  @Input() additionSicknessBenefit: number;
  @Output() outputAdditionSicknessBenefit = new EventEmitter();

  @Input() deductionCar: number;
  @Output() outputDeductionCar = new EventEmitter();

  @Input() deductionTraining: number;
  @Output() outputDeductionTraining = new EventEmitter();

  @Input() totalHours: number;
  @Output() outputTotalHours = new EventEmitter();

  @Input() totalSalary: number;
  @Output() outputTotalSalary = new EventEmitter();

  @Input() totalAdditions: number;
  @Output() outputTotalAdditions = new EventEmitter();

  @Input() totalDeductions: number;
  @Output() outputTotalDeductions = new EventEmitter();

  @Input() totalPay: number;
  @Output() outputTotalPay = new EventEmitter();

  @Input() buttonConfirm: string;
  // @Input() netRateModel: string; // to chyba odwrotnie (child->parent) ??
  currentId: string;

  netRateModel: number;
  normalHoursModel: number;
  weekendHoursModel: number;
  additionOwnHouseModel: number;
  additionQuaterBonusModel: number;
  additionSicknessBenefitModel: number;
  deductionCarModel: number;
  deductionTrainingModel: number;

  @Output() outputNetRateModel = new EventEmitter();
  @Output() outputNormalHoursModel = new EventEmitter();
  @Output() outputWeekendHoursModel = new EventEmitter();
  @Output() outputChangeBonusOwnHouseModel = new EventEmitter();
  @Output() outputChangeBonusQuaterBonusModel = new EventEmitter();
  @Output() outputChangeBonusSicknessBenefitModel = new EventEmitter();

  @Output() outputDeductionForCarModel = new EventEmitter();
  @Output() outputDeductionForTrainingModel = new EventEmitter();

  @Output() outputPopupActive = new EventEmitter();

  sendPopupActive() {
    this.popupActive = false;
    this.outputPopupActive.emit(this.popupActive);
  }

  sendNetRate() {
    this.outputNetRate.emit(this.netRate);
  }
  sendNormalHours() {
    this.outputNormalHours.emit(this.normalHours);
  }
  sendWeekendHours() {
    this.outputWeekendHours.emit(this.weekendHours);
  }
  sendSalaryNormalHours() {
    this.outputSalaryNormalHours.emit(this.salaryNormalHours);
  }
  sendSalaryWeekendHours() {
    this.outputSalaryWeekendHours.emit(this.salaryWeekendHours);
  }
  sendAdditionOwnHouse() {
    this.outputAdditionOwnHouse.emit(this.additionOwnHouse);
  }
  sendAdditionQuaterBonus() {
    this.outputAdditionQuaterBonus.emit(this.additionQuaterBonus);
  }
  sendAdditionSicknessBenefit() {
    this.outputAdditionSicknessBenefit.emit(this.additionSicknessBenefit);
  }
  sendDeductionCar() {
    this.outputDeductionCar.emit(this.deductionCar);
  }
  sendDeductionTraining() {
    this.outputDeductionTraining.emit(this.deductionTraining);
  }
  sendTotalHours() {
    this.outputTotalHours.emit(this.totalHours);
  }
  sendTotalSalary() {
    this.outputTotalSalary.emit(this.totalSalary);
  }
  sendTotalAdditions() {
    this.outputTotalAdditions.emit(this.totalAdditions);
  }
  sendTotalDeductions() {
    this.outputTotalDeductions.emit(this.totalDeductions);
  }
  sendTotalPay() {
    this.outputTotalPay.emit(this.totalPay);
  }

  gatherSendObjectData() {
    this.sendNetRate();
    this.sendNormalHours();
    this.sendWeekendHours();
    this.sendSalaryNormalHours();
    this.sendSalaryWeekendHours();
    this.sendAdditionOwnHouse();
    this.sendAdditionQuaterBonus();
    this.sendAdditionSicknessBenefit();
    this.sendDeductionCar();
    this.sendDeductionTraining();
    this.sendTotalHours();
    this.sendTotalSalary();
    this.sendTotalAdditions();
    this.sendTotalDeductions();
    this.sendTotalPay();
  }

  constructor() {}

  sendNetRateModel() {
    this.outputNetRateModel.emit(this.netRateModel);
    // this.currentId = this.id;

    this.Crew.map((val) => {
      if (val.id === this.id) {
        val.netRate = this.netRateModel;
        this.netRate = this.netRateModel;

        val.salaryNormalHours = this.normalHours * this.netRate;
        this.salaryNormalHours = this.normalHours * this.netRate;

        val.salaryWeekendHours = this.weekendHours * this.netRate * 1.5;
        this.salaryWeekendHours = this.weekendHours * this.netRate * 1.5;

        val.totalHours = this.normalHours + this.weekendHours;
        this.totalHours = this.normalHours + this.weekendHours;

        val.totalSalary = this.salaryNormalHours + this.salaryWeekendHours;
        this.totalSalary = this.salaryNormalHours + this.salaryWeekendHours;

        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
        this.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.netRateModel = null;
    this.changeNettoActive = false;
  }
  sendNormalHoursModel() {
    this.outputNormalHoursModel.emit(this.normalHoursModel);
    console.log(this.dataSource);

    this.Crew.map((val) => {
      if (val.id === this.id) {
        val.normalHours = this.normalHoursModel;
        this.normalHours = this.normalHoursModel;

        val.salaryNormalHours = this.normalHours * this.netRate;
        this.salaryNormalHours = this.normalHours * this.netRate;

        val.totalHours = this.normalHours + this.weekendHours;
        this.totalHours = this.normalHours + this.weekendHours;

        val.totalSalary = this.salaryNormalHours + this.salaryWeekendHours;
        this.totalSalary = this.salaryNormalHours + this.salaryWeekendHours;

        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
        this.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.normalHoursModel = null;
    this.changeNormalHoursActive = false;

    this.gatherSendObjectData();
  }

  sendWeekendHoursModel() {
    this.outputWeekendHoursModel.emit(this.weekendHoursModel);
    this.currentId = this.id;

    this.Crew.map((val) => {
      if (val.id === this.currentId) {
        val.weekendHours = this.weekendHoursModel;
        this.weekendHours = this.weekendHoursModel;

        val.salaryWeekendHours = this.weekendHours * this.netRate * 1.5;
        this.salaryWeekendHours = this.weekendHours * this.netRate * 1.5;

        val.totalHours = this.normalHours + this.weekendHours;
        this.totalHours = this.normalHours + this.weekendHours;

        val.totalSalary = this.salaryNormalHours + this.salaryWeekendHours;
        this.totalSalary = this.salaryNormalHours + this.salaryWeekendHours;

        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
        this.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.weekendHoursModel = null;
    this.changeWeekendHoursActive = false;

    this.gatherSendObjectData();
  }

  sendChangeBonusOwnHouseModel() {
    this.outputChangeBonusOwnHouseModel.emit(this.additionOwnHouseModel);
    this.currentId = this.id;

    this.additionOwnHouse = this.additionOwnHouseModel;
    this.totalPay =
      this.totalSalary + this.totalAdditions - this.totalDeductions;
    this.totalAdditions =
      this.additionOwnHouse +
      this.additionQuaterBonus +
      this.additionSicknessBenefit;

    this.Crew.map((val) => {
      if (val.id === this.currentId) {
        val.additionOwnHouse = this.additionOwnHouseModel;
        val.totalAdditions =
          this.additionOwnHouse +
          this.additionQuaterBonus +
          this.additionSicknessBenefit;
        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.additionOwnHouseModel = null;
    this.ownHouseActive = false;
    this.gatherSendObjectData();
  }

  sendChangeBonusQuaterBonusModel() {
    this.outputChangeBonusQuaterBonusModel.emit(this.additionQuaterBonusModel);
    this.currentId = this.id;

    this.Crew.map((val) => {
      if (val.id === this.currentId) {
        val.additionQuaterBonus = this.additionQuaterBonusModel;
        this.additionQuaterBonus = this.additionQuaterBonusModel;

        val.totalAdditions =
          this.additionOwnHouse +
          this.additionQuaterBonus +
          this.additionSicknessBenefit;
        this.totalAdditions =
          this.additionOwnHouse +
          this.additionQuaterBonus +
          this.additionSicknessBenefit;

        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
        this.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.additionQuaterBonusModel = null;
    this.changeQuaterBonusActive = false;
    this.gatherSendObjectData();
  }

  sendChangeBonusSicknessBenefitModel() {
    this.outputChangeBonusSicknessBenefitModel.emit(
      this.additionSicknessBenefitModel
    );
    this.currentId = this.id;
    this.Crew.map((val) => {
      if (val.id === this.currentId) {
        val.additionSicknessBenefit = this.additionSicknessBenefitModel;
        this.additionSicknessBenefit = this.additionSicknessBenefitModel;

        val.totalAdditions =
          this.additionOwnHouse +
          this.additionQuaterBonus +
          this.additionSicknessBenefit;
        this.totalAdditions =
          this.additionOwnHouse +
          this.additionQuaterBonus +
          this.additionSicknessBenefit;

        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
        this.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.additionSicknessBenefitModel = null;
    this.changeSicknessBenefitActive = false;
    this.gatherSendObjectData();
  }

  sendDeductionForCarModel() {
    this.outputDeductionForCarModel.emit(this.deductionCarModel);
    this.currentId = this.id;
    this.Crew.map((val) => {
      if (val.id === this.currentId) {
        val.deductionCar = this.deductionCarModel;
        this.deductionCar = this.deductionCarModel;

        val.totalDeductions = this.deductionCar + this.deductionTraining;
        this.totalDeductions = this.deductionCar + this.deductionTraining;

        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
        this.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.deductionCarModel = null;
    this.carDeductionActive = false;
    this.gatherSendObjectData();
  }

  sendDeductionForTrainingModel() {
    this.outputDeductionForTrainingModel.emit(this.deductionTrainingModel);
    this.currentId = this.id;
    this.Crew.map((val) => {
      if (val.id === this.currentId) {
        val.deductionTraining = this.deductionTrainingModel;
        this.deductionTraining = this.deductionTrainingModel;

        val.totalDeductions = this.deductionCar + this.deductionTraining;
        this.totalDeductions = this.deductionCar + this.deductionTraining;

        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
        this.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.deductionTrainingModel = null;
    this.trainingDeductionActive = false;
    this.gatherSendObjectData();
  }

  ngOnInit(): void {}
}
