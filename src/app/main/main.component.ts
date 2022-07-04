import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Employee } from '../main/employee-model/employee.model';

const Crew: Employee[] = [
  new Employee('001', 'Kamil', 'Jurak', 11, 'magazynier'),
  new Employee(' 002', 'Paweł', 'Maciejowski', 12, 'murarz'),
  new Employee(' 003', 'Jan', 'Jacek', 17, 'piekarz'),
  new Employee(' 004', 'Błażej', 'Sucharski', 11, 'magazynier'),
  new Employee(' 005', 'Karol', 'Bartkowiak', 16, 'zaopatrzeniowiec'),
  new Employee(' 006', 'Daniel', 'Bojanowski', 12, 'magazynier'),
  new Employee(' 007', 'Bartłomiej', 'Czerwik', 17, 'piekarz'),
  new Employee(' 008', 'Rafał', 'Cichowlas', 12, 'murarz'),
  new Employee(' 009', 'Maciej', 'Górowski', 14, 'piekarz'),
  new Employee('010', 'Paweł ', 'Dąbrowski', 12, 'murarz'),
  new Employee('011', 'Kacper ', 'Piotrowski', 15, 'zaopatrzeniowiec'),
  new Employee('012', 'Korneliusz ', 'Kołodziej', 11, 'magazynier'),
  new Employee('013', 'Anatol ', 'Szymczak', 13, 'piekarz'),
  new Employee('014', 'Marian ', 'Brzeziński', 11, 'murarz'),
  new Employee('015', 'Jakub ', 'Wiśniewski', 13, 'piekarz'),
  new Employee('016', 'Franciszek ', 'Szulc', 11, 'magazynier'),
  new Employee('017', 'Amir ', 'Lis', 11, 'magazynier'),
  new Employee('018', 'Ryszard ', 'Dąbrowski', 14, 'piekarz'),
  new Employee('019', 'Błażej  ', 'Walczak', 12, 'murarz'),
  new Employee('020', 'Jarosław  ', 'Jankowski', 11, 'piekarz'),
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  Crew = Crew;

  displayedColumns: string[] = [
    'demo-id',
    'demo-name',
    'demo-surname',
    'demo-profession',
    'demo-details',
  ];
  dataSource = [...Crew];

  @ViewChild(MatTable) table: MatTable<Employee>;

  popupActive: boolean;
  popupAddEmployeeActive: boolean = false;
  changeNettoActive: boolean = false;
  changeNormalHoursActive: boolean = false;
  changeWeekendHoursActive: boolean = false;
  ownHouseActive: boolean = false;
  changeQuaterBonusActive: boolean = false;
  changeSicknessBenefitActive: boolean = false;
  carDeductionActive: boolean = false;
  trainingDeductionActive: boolean = false;

  employeeName: string = '';
  employeeSurname: string = '';
  employeeProfession: string = '';
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
  salaryNormalHours: number = 0;
  salaryWeekendHours: number = 0;
  additionOwnHouse: number = 0;
  additionQuaterBonus: number = 0;
  additionSicknessBenefit: number = 0;
  deductionCar: number = 0;
  deductionTraining: number = 0;
  totalHours: number = 0;
  totalSalary: number = 0;
  totalAdditions: number = 0;
  totalDeductions: number = 0;
  totalPay: number = 0;

  buttonConfirm = 'Confirm';
  counter: number = 0;

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
      netRate: 15,
      profession: this.employeeProfession,
    });
    this.dataSource = [...Crew];

    return {
      id: newId,
      name: emplName,
      surname: emplSurame,
      netRate: 15,
      profession: this.employeeProfession,
    };
  }

  addNewEmployee() {
    if (
      this.employeeName === '' ||
      this.employeeSurname === '' ||
      this.employeeProfession === ''
    ) {
      alert('In order to add new employee, you have to fill all input fields.');
    } else {
      this.dataSource.push(this.createNewEmployee());
      this.table.renderRows();
      this.popupAddEmployeeActive = false;
      this.employeeName = '';
      this.employeeSurname = '';
      this.employeeProfession = '';
    }
  }
  getRowObject(row) {
    // this.dataSource = [...Crew];
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

  receiveNetRateModel($event) {
    this.netRateModel = $event;
  }
  receiveNormalHoursModel($event) {
    this.normalHoursModel = $event;
  }
  receiveWeekendHoursModel($event) {
    this.weekendHoursModel = $event;
  }
  receiveChangeBonusOwnHouseModel($event) {
    this.additionOwnHouseModel = $event;
  }
  receiveChangeBonusQuaterBonusModel($event) {
    this.additionQuaterBonusModel = $event;
  }
  receiveChangeBonusSicknessBenefitModel($event) {
    this.additionSicknessBenefitModel = $event;
  }
  receiveDeductionForCarModel($event) {
    this.deductionCarModel = $event;
  }
  receiveDeductionForTrainingModel($event) {
    this.deductionTrainingModel = $event;
  }
  receivePopupActive($event) {
    this.popupActive = $event;
  }

  receiveNetRate($event) {
    this.netRate = $event;
  }
  receiveNormalHours($event) {
    this.normalHours = $event;
  }
  receiveWeekendHours($event) {
    this.weekendHours = $event;
  }
  receiveSalaryNormalHours($event) {
    this.salaryNormalHours = $event;
  }
  receiveSalaryWeekendHours($event) {
    this.salaryWeekendHours = $event;
  }
  receiveAdditionOwnHouse($event) {
    this.additionOwnHouse = $event;
  }
  receiveAdditionQuaterBonus($event) {
    this.additionQuaterBonus = $event;
  }
  receiveAdditionSicknessBenefit($event) {
    this.additionSicknessBenefit = $event;
  }
  receiveDeductionCar($event) {
    this.deductionCar = $event;
  }
  receiveDeductionTraining($event) {
    this.deductionTraining = $event;
  }
  receiveTotalHours($event) {
    this.totalHours = $event;
  }
  receiveTotalSalary($event) {
    this.totalSalary = $event;
  }
  receiveTotalAdditions($event) {
    this.totalAdditions = $event;
  }
  receiveTotalDeductions($event) {
    this.totalDeductions = $event;
  }
  receiveTotalPay($event) {
    this.totalPay = $event;
  }
}

//! usuwane funkcje (dlatego, że dodane zostają nowe w osobnym componencie niejako zastępujące je)
// coś z netRate()
// changeNormalHours()
