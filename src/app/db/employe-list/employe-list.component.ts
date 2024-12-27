import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  users: User[] = [];

  ngOnInit(): void {
    this.getUsers();
  }

  constructor(private userService: UserService, private router: Router) { }

  private getUsers() {
    this.userService.getEmployeesList().subscribe(res => {
      console.log(res, "res==>");
      this.users = res.data; // Access the 'data' property to get the array of employees
    });
  }

  updateEmployee(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteEmployee(id: number) {
    this.userService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getUsers(); // Update the employee list after deletion
    });
  }
}
