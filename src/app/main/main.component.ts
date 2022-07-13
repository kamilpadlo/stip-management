import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Employee } from './models/employee-model/employee.model';
import { User } from './models/user-model/user.model';

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

  netRateInpF: number;
  normalHoursInpF: number;
  weekendHoursInpF: number;
  additionOwnHouseInpF: number;
  additionQuaterBonusInpF: number;
  additionSicknessBenefitInpF: number;
  deductionCarInpF: number;
  deductionTrainingInpF: number;

  currentId: string;

  currentEmployee: Employee;
  testObject;

  buttonConfirm = 'Confirm';

  createNewEmployee() {
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
    this.dataSource = [...Crew];
    this.popupActive = true;
    this.currentEmployee = row;

    Object.keys(this.currentEmployee).forEach((key) => {
      if (this.currentEmployee[key] === undefined) {
        this.currentEmployee[key] = 0;
      }
    });
  }

  receiveCrew($event) {
    this.Crew = $event;
  }

  receiveHoursInpF($event) {
    this.netRateInpF = $event.netRateInpF;
    this.normalHoursInpF = $event.normalHoursInpF;
    this.weekendHoursInpF = $event.weekendHoursInpF;
  }

  receiveAdditionsInpF($event) {
    this.additionOwnHouseInpF = $event;
    this.additionQuaterBonusInpF = $event;
    this.additionSicknessBenefitInpF = $event;
  }

  receiveDeductionsInpF($event) {
    this.deductionCarInpF = $event;
    this.deductionTrainingInpF = $event;
  }

  receivePopupActive($event) {
    this.popupActive = $event;
  }
}
