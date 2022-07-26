import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  constructor(private testService: TestService) {}

  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUsersFake();
  }

  onGetUsers(): void {
    this.testService.getUsers().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error)
    );
  }

  onGetUsersFake(): void {
    this.testService.getUsersFake().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error)
    );
  }
}
