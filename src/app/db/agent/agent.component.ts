import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user';
import * as bcrypt from 'bcryptjs';






@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit{

  user: User = new User();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  saveUser() {
    // Hash the password before saving
    const saltRounds = 10; // The number of salt rounds for bcrypt (higher is more secure but slower)
    bcrypt.hash(this.user.password, saltRounds, (err:any, hash:any) => {
      if (err) {
        console.error('Error hashing password:', err);
        return;
      }
      // Assign the hashed password back to the employee object
      this.user.password = hash;
      
      // Save the user with the hashed password
      this.userService.createUser(this.user).subscribe(
        (data) => {
          console.log(data);
          this.goToUserList();
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  goToUserList() {
    this.router.navigate(['/employes']);
  }
  
  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }

}
