import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Information } from '../information';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit{

  information: Information = new Information();

  email: string = '';
  firstName: string= '';
  lastName: string= '';
  comment: string = '';
  loginError: boolean = false;
  message: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // Vous pouvez également vérifier si un utilisateur est déjà connecté ici et le rediriger si nécessaire.
  }

  saveUser() {
    this.userService.sendMail(this.information).subscribe(
      (data) => {
        console.log(data);
        window.alert('votre message a été envoyé avec succés')
        //this.goToUserList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  goToUserList() {
    this.router.navigate(['/comment']);
  }
  
  onSubmit() {
    this.information.firstName = this.firstName;
    this.information.lastName = this.lastName;
    this.information.email = this.email;
    this.information.comment = this.comment;
    console.log(this.information);
    this.saveUser();
  }

}
