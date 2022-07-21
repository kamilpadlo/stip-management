import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Employee } from './models/employee-model/employee.model';
import { User } from './models/user-model/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// const Crew: Employee[] = [
//   new Employee('000', 'qwe', 'qwe', 1, 'cos'),
//   {
//     id: '001',
//     name: 'Kamil',
//     surname: 'Jurak',
//     netRate: 11,
//     profession: 'magazynier',
//   },
//   {
//     id: '002',
//     name: 'Paweł',
//     surname: 'Maciejowski',
//     netRate: 12,
//     profession: 'murarz',
//   },
//   {
//     id: '003',
//     name: 'Jan',
//     surname: 'Jacek',
//     netRate: 17,
//     profession: 'piekarz',
//   },
//   {
//     id: '004',
//     name: 'Błażej',
//     surname: 'Sucharski',
//     netRate: 11,
//     profession: 'magazynier',
//   },
//   {
//     id: '005',
//     name: 'Karol',
//     surname: 'Bartkowiak',
//     netRate: 16,
//     profession: 'zaopatrzeniowiec',
//   },
//   {
//     id: '006',
//     name: 'Daniel',
//     surname: 'Bojanowski',
//     netRate: 12,
//     profession: 'magazynier',
//   },
//   {
//     id: '007',
//     name: 'Bartłomiej',
//     surname: 'Czerwik',
//     netRate: 17,
//     profession: 'piekarz',
//   },
//   {
//     id: '008',
//     name: 'Rafał',
//     surname: 'Cichowlas',
//     netRate: 12,
//     profession: 'murarz',
//   },
//   {
//     id: '009',
//     name: 'Maciej',
//     surname: 'Górowski',
//     netRate: 14,
//     profession: 'piekarz',
//   },
//   {
//     id: '010',
//     name: 'Paweł ',
//     surname: 'Dąbrowski',
//     netRate: 12,
//     profession: 'murarz',
//   },
//   {
//     id: '011',
//     name: 'Kacper ',
//     surname: 'Piotrowski',
//     netRate: 15,
//     profession: 'zaopatrzeniowiec',
//   },
//   {
//     id: '012',
//     name: 'Korneliusz ',
//     surname: 'Kołodziej',
//     netRate: 11,
//     profession: 'magazynier',
//   },
//   {
//     id: '013',
//     name: 'Anatol ',
//     surname: 'Szymczak',
//     netRate: 13,
//     profession: 'piekarz',
//   },
//   {
//     id: '014',
//     name: 'Marian ',
//     surname: 'Brzeziński',
//     netRate: 11,
//     profession: 'murarz',
//   },
//   {
//     id: '015',
//     name: 'Jakub ',
//     surname: 'Wiśniewski',
//     netRate: 13,
//     profession: 'piekarz',
//   },
//   {
//     id: '016',
//     name: 'Franciszek ',
//     surname: 'Szulc',
//     netRate: 11,
//     profession: 'magazynier',
//   },
//   {
//     id: '017',
//     name: 'Amir ',
//     surname: 'Lis',
//     netRate: 11,
//     profession: 'magazynier',
//   },
//   {
//     id: '018',
//     name: 'Ryszard ',
//     surname: 'Dąbrowski',
//     netRate: 14,
//     profession: 'piekarz',
//   },
//   {
//     id: '019',
//     name: 'Błażej  ',
//     surname: 'Walczak',
//     netRate: 12,
//     profession: 'murarz',
//   },
//   {
//     id: '020',
//     name: 'Jarosław  ',
//     surname: 'Jankowski',
//     netRate: 11,
//     profession: 'piekarz',
//   },
// ];
const Crew: Employee[] = [
  new Employee('001', 'Kamil', 'Jurak', 11, 'magazynier'),
  new Employee('002', 'Paweł', 'Maciejowski', 12, 'murarz'),
  new Employee('003', 'Jan', 'Jacek', 17, 'piekarz'),
  new Employee('004', 'Błażej', 'Sucharski', 11, 'magazynier'),
  new Employee('005', 'Karol', 'Bartkowiak', 16, 'zaopatrzeniowiec'),
  new Employee('006', 'Daniel', 'Bojanowski', 12, 'magazynier'),
  new Employee('007', 'Bartłomiej', 'Czerwik', 17, 'piekarz'),
  new Employee('008', 'Rafał', 'Cichowlas', 12, 'murarz'),
  new Employee('009', 'Maciej', 'Górowski', 14, 'piekarz'),
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
    'id',
    'name',
    'surname',
    'profession',
    'details',
  ];

  dataSource = new MatTableDataSource(Crew);

  @ViewChild(MatTable) table: MatTable<Employee>;
  @ViewChild(MatSort) sort: MatSort;

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

  name: any;

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

    return new Employee(
      newId,
      emplName,
      emplSurame,
      15,
      this.employeeProfession
    );
    // return {
    //   id: newId,
    //   name: emplName,
    //   surname: emplSurame,
    //   netRate: 15,
    //   profession: this.employeeProfession,
    // };
  }

  addNewEmployee() {
    if (
      this.employeeName === '' ||
      this.employeeSurname === '' ||
      this.employeeProfession === ''
    ) {
      alert('In order to add new employee, you have to fill all input fields.');
    } else {
      this.Crew.push(this.createNewEmployee());

      this.table.renderRows();
      this.popupAddEmployeeActive = false;
      this.employeeName = '';
      this.employeeSurname = '';
      this.employeeProfession = '';
    }
  }

  getRowObject(row) {
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
    this.dataSource.data = this.dataSource.data;
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
    this.dataSource.data = this.dataSource.data;
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
    this.dataSource.data = this.dataSource.data;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    //todo highlight a searched phrase
  }
}
