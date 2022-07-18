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

  employeeName: string = '';
  employeeSurname: string = '';
  employeeProfession: string = '';

  employee: Employee;

  idSorted: boolean = false;
  surnameSorted: boolean = false;
  professionSorted: boolean = false;

  arrowId;
  arrowSurname;
  arrowProfession;

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

    Crew.push(
      new Employee(newId, emplName, emplSurame, 15, this.employeeProfession)
    );
    this.dataSource = [...Crew];

    return new Employee(
      newId,
      emplName,
      emplSurame,
      15,
      this.employeeProfession
    );
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
    this.employee = row;

    Object.keys(this.employee).forEach((key) => {
      if (this.employee[key] === undefined) {
        this.employee[key] = 0;
      }
    });
  }

  receivePopupActive($event) {
    this.popupActive = $event;
  }

  sortById() {
    if (this.idSorted === false) {
      Crew.sort((a, b) => (+a.id > +b.id ? -1 : 1));
      this.arrowId = 'arrow_upward';
    }
    if (this.idSorted === true) {
      Crew.sort((a, b) => (+a.id > +b.id ? 1 : -1));
      this.arrowId = 'arrow_downward';
    }
    this.idSorted = !this.idSorted;
    this.arrowSurname = 'sort';
    this.arrowProfession = 'sort';
    this.dataSource = [...Crew];
  }

  sortBySurname() {
    if (this.surnameSorted === false) {
      Crew.sort((a, b) => (a.surname > b.surname ? 1 : -1));
      this.arrowSurname = 'arrow_downward';
    }
    if (this.surnameSorted === true) {
      Crew.sort((a, b) => (a.surname > b.surname ? -1 : 1));
      this.arrowSurname = 'arrow_upward';
    }
    this.surnameSorted = !this.surnameSorted;
    this.arrowId = 'sort';
    this.arrowProfession = 'sort';
    this.dataSource = [...Crew];
  }

  sortByProfession() {
    if (this.professionSorted === false) {
      Crew.sort((a, b) =>
        a.profession > b.profession
          ? 1
          : a.profession === b.profession
          ? a.surname > b.surname
            ? 1
            : -1
          : -1
      );

      this.arrowProfession = 'arrow_downward';
    }
    if (this.professionSorted === true) {
      Crew.sort((a, b) =>
        a.profession > b.profession
          ? -1
          : a.profession === b.profession
          ? a.surname > b.surname
            ? 1
            : -1
          : 1
      );

      this.arrowProfession = 'arrow_upward';
    }
    this.professionSorted = !this.professionSorted;
    this.arrowId = 'sort';
    this.arrowSurname = 'sort';
    this.dataSource = [...Crew];
  }
}
