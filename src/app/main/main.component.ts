import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface Employee {
  name: string;
  surname: string;
  id: string;
  profession: string;
  netRate?: number;
  normalHours?: number;
  weekendHours?: number;
  salaryNormalHours?: number;
  salaryWeekendHours?: number;
  additionOwnHouse?: number;
  additionQuaterBonus?: number;
  additionSicknessBenefit?: number;
  deductionCar?: number;
  deductionTraining?: number;
  totalHours?: number;
  totalSalary?: number;
  totalAdditions?: number;
  totalDeductions?: number;
  totalPay?: number;
}

const Crew: Employee[] = [
  {
    id: ' 001',
    name: 'Kamil',
    surname: 'Jurak',
    profession: 'magazynier',
    netRate: 11,
  },
  {
    id: ' 002',
    name: 'Paweł',
    surname: 'Maciejowski',
    profession: 'magazynier',
    netRate: 12,
  },
  {
    id: ' 003',
    name: 'Jan',
    surname: 'Jacek',
    profession: 'zaopatrzeniowiec',
    netRate: 17,
  },
  {
    id: ' 004',
    name: 'Błażej',
    surname: 'Sucharski',
    profession: 'magazynier',
    netRate: 11,
  },
  {
    id: ' 005',
    name: 'Karol',
    surname: 'Bartkowiak',
    profession: 'zaopatrzeniowiec',
    netRate: 16,
  },
  {
    id: ' 006',
    name: 'Daniel',
    surname: 'Bojanowski',
    profession: 'magazynier',
    netRate: 12,
  },
  {
    id: ' 007',
    name: 'Bartłomiej',
    surname: 'Czerwik',
    profession: 'zaopatrzeniowiec',
    netRate: 17,
  },
  {
    id: ' 008',
    name: 'Rafał',
    surname: 'Cichowlas',
    profession: 'magazynier',
    netRate: 12,
  },
  {
    id: ' 009',
    name: 'Maciej',
    surname: 'Górowski',
    profession: 'piekarz',
    netRate: 14,
  },
  {
    id: '010',
    name: 'Zenon',
    surname: 'Zambrzycki',
    profession: 'magazynier',
    netRate: 11,
  },
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  displayedColumns: string[] = [
    'demo-id',
    'demo-name',
    'demo-surname',
    'demo-profession',
  ];
  dataSource = [...Crew];

  @ViewChild(MatTable) table: MatTable<Employee>;

  addEmployeeFormActive: boolean = false;
  popupActive: boolean = false;
  changeNettoActive: boolean = false;
  changeNormalHoursActive: boolean = false;
  changeWeekendHoursActive: boolean = false;
  ownHouseActive: boolean = false;
  changeQuaterBonusActive: boolean = false;
  changeSicknessBenefitActive: boolean = false;
  carDeductionActive: boolean = false;
  trainingDeductionActive: boolean = false;

  employeeName: string;
  employeeSurname: string;
  employeeProfession: string;
  //* netRateModel - ngModel
  netRateModel: number;
  normalHoursModel: number;
  weekendHoursModel: number;
  additionOwnHouseModel: number;
  additionSicknessBenefitModel: number;
  additionQuaterBonusModel: number;
  deductionCarModel: number;
  deductionTrainingModel: number;

  currentId: string;

  id: string;
  name: string;
  surname: string;
  profession: string;
  netRate: number;
  normalHours: number = 0;
  weekendHours: number = 0;
  salaryNormalHours: number;
  salaryWeekendHours: number;
  additionOwnHouse: number;
  additionQuaterBonus: number;
  additionSicknessBenefit: number;
  deductionCar: number;
  deductionTraining: number;
  totalHours: number = 0;
  totalSalary: number = 0;
  totalAdditions: number = 0;
  totalDeductions: number = 0;
  totalPay: number = 0;

  buttonConfirm = 'Confirm';

  createNewEmployee() {
    //todo to jest ok jeśli nie ma opcji usuwania pracownika
    let newId = (Crew.length + 1).toString();
    if (newId.length === 2) {
      newId = `0${newId}`;
    }

    let emplName =
      this.employeeName.charAt(0).toUpperCase() + this.employeeName.slice(1);
    let emplSurame =
      this.employeeSurname.charAt(0).toUpperCase() +
      this.employeeSurname.slice(1);

    Crew.push({
      id: newId,
      name: emplName,
      surname: emplSurame,
      profession: this.employeeProfession,
      netRate: 15,
    });

    return {
      id: newId,
      name: emplName,
      surname: emplSurame,
      profession: this.employeeProfession,
      netRate: 15,
    };
  }

  addNewEmployee() {
    this.dataSource.push(this.createNewEmployee());
    this.table.renderRows();
    this.addEmployeeFormActive = false;
    this.employeeName = '';
    this.employeeSurname = '';
    this.employeeProfession = '';
  }
  getRowObject(row) {
    this.dataSource = [...Crew];
    this.popupActive = true;
    this.id = row.id;
    this.name = row.name;
    this.surname = row.surname;
    this.profession = row.profession;
    this.netRate = row.netRate;
    this.normalHours = row.normalHours ? row.normalHours : 0;
    this.weekendHours = row.weekendHours ? row.weekendHours : 0;
    this.salaryNormalHours = row.salaryNormalHours ? row.salaryNormalHours : 0;
    this.salaryWeekendHours = row.salaryWeekendHours
      ? row.salaryWeekendHours
      : 0;
    this.additionOwnHouse = row.additionOwnHouse ? row.additionOwnHouse : 0;
    this.additionQuaterBonus = row.additionQuaterBonus
      ? row.additionQuaterBonus
      : 0;
    this.additionSicknessBenefit = row.additionSicknessBenefit
      ? row.additionSicknessBenefit
      : 0;
    this.deductionCar = row.deductionCar ? row.deductionCar : 0;
    this.deductionTraining = row.deductionTraining ? row.deductionTraining : 0;
    this.totalHours = row.totalHours ? row.totalHours : 0;
    this.totalSalary = row.totalSalary ? row.totalSalary : 0;
    this.totalAdditions = row.totalAdditions ? row.totalAdditions : 0;
    this.totalDeductions = row.totalDeductions ? row.totalDeductions : 0;
    this.totalPay = row.totalPay ? row.totalPay : 0;
  }
  //* Hours segment
  changeNettRate() {
    this.netRate = this.netRateModel;
    this.currentId = this.id;
    Crew.map((val) => {
      if (val.id === this.currentId) val.netRate = this.netRateModel;
    });
    this.netRateModel = null;
    this.changeNettoActive = false;
  }
  //? change normal hours + update normal hours salary
  changeNormalHours() {
    this.normalHours = this.normalHoursModel;
    this.currentId = this.id;
    this.totalHours = this.normalHours + this.weekendHours;

    Crew.map((val) => {
      if (val.id === this.currentId) {
        val.normalHours = this.normalHoursModel;
        val.salaryNormalHours = this.normalHours * this.netRate;
        this.salaryNormalHours = val.salaryNormalHours;
        val.totalHours = this.normalHours + this.weekendHours;
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
  }
  //? change weekend hours + update weekend hours salary
  changeWeekendHours() {
    this.currentId = this.id;
    this.weekendHours = this.weekendHoursModel;
    this.totalHours = this.normalHours + this.weekendHours;

    Crew.map((val) => {
      if (val.id === this.currentId) {
        val.weekendHours = this.weekendHoursModel;
        val.salaryWeekendHours = this.weekendHours * this.netRate * 1.5;
        this.salaryWeekendHours = val.salaryWeekendHours;
        val.totalHours = this.normalHours + this.weekendHours;
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
  }
  //* Addition segment
  bonusOwnHouse() {
    this.currentId = this.id;
    this.additionOwnHouse = this.additionOwnHouseModel;
    this.totalAdditions =
      this.additionOwnHouse +
      this.additionQuaterBonus +
      this.additionSicknessBenefit;
    Crew.map((val) => {
      if (val.id === this.currentId) {
        val.additionOwnHouse = this.additionOwnHouseModel;
        val.totalAdditions =
          this.additionOwnHouse +
          this.additionQuaterBonus +
          this.additionSicknessBenefit;
        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
        this.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.additionOwnHouseModel = null;
    this.ownHouseActive = false;
  }

  bonusQuaterBonus() {
    this.currentId = this.id;
    this.additionQuaterBonus = this.additionQuaterBonusModel;
    this.totalAdditions =
      this.additionOwnHouse +
      this.additionQuaterBonus +
      this.additionSicknessBenefit;
    this.totalPay =
      this.totalSalary + this.totalAdditions - this.totalDeductions;
    Crew.map((val) => {
      if (val.id === this.currentId) {
        val.additionQuaterBonus = this.additionQuaterBonusModel;
        val.totalAdditions =
          this.additionOwnHouse +
          this.additionQuaterBonus +
          this.additionSicknessBenefit;
        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.additionQuaterBonusModel = null;
    this.changeQuaterBonusActive = false;
  }

  bonusSicknessBenefit() {
    this.currentId = this.id;
    this.additionSicknessBenefit = this.additionSicknessBenefitModel;
    this.totalAdditions =
      this.additionOwnHouse +
      this.additionQuaterBonus +
      this.additionSicknessBenefit;
    this.totalPay =
      this.totalSalary + this.totalAdditions - this.totalDeductions;
    Crew.map((val) => {
      if (val.id === this.currentId) {
        val.additionSicknessBenefit = this.additionSicknessBenefitModel;
        val.totalAdditions =
          this.additionOwnHouse +
          this.additionQuaterBonus +
          this.additionSicknessBenefit;
        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.additionSicknessBenefitModel = null;
    this.changeSicknessBenefitActive = false;
  }
  //* Deduction segment

  deductionForCar() {
    this.currentId = this.id;
    this.deductionCar = this.deductionCarModel;
    this.totalDeductions = this.deductionCar + this.deductionTraining;
    this.totalPay =
      this.totalSalary + this.totalAdditions - this.totalDeductions;
    Crew.map((val) => {
      if (val.id === this.currentId) {
        val.deductionCar = this.deductionCarModel;
        val.totalDeductions = this.deductionCar + this.deductionTraining;
        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.deductionCarModel = null;
    this.carDeductionActive = false;
  }
  deductionForTraining() {
    this.currentId = this.id;
    this.deductionTraining = this.deductionTrainingModel;
    this.totalDeductions = this.deductionCar + this.deductionTraining;
    this.totalPay =
      this.totalSalary + this.totalAdditions - this.totalDeductions;
    Crew.map((val) => {
      if (val.id === this.currentId) {
        val.deductionTraining = this.deductionTrainingModel;
        val.totalDeductions = this.deductionCar + this.deductionTraining;
        val.totalPay =
          this.totalSalary + this.totalAdditions - this.totalDeductions;
      }
    });
    this.deductionTrainingModel = null;
    this.trainingDeductionActive = false;
  }
}
