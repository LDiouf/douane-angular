import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponente implements OnInit {
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  message: string = '';

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    // Vous pouvez également vérifier si un utilisateur est déjà connecté ici et le rediriger si nécessaire.
  }

  onSubmit() {
    // Vérifier les informations d'identification
    this.userService.authenticate(this.username, this.password).subscribe(
      (data) => {
        console.log("Response Data:", data);

        if (data.token) {
          this.message = data.message; // Définissez la propriété message avec le message de réussite
          this.loginError = false; // Réinitialisez loginError à false en cas de connexion réussie
          if (this.username === 'boubacar' && this.password === 'wade') {
            this.router.navigate(['/employes']); // Redirigez vers la page employer si l'utilisateur est "admin"
          } else {
            this.router.navigate(['/direction']); // Redirigez vers la page direction pour les autres utilisateurs
          }
        } else {
          this.loginError = true; // Définissez loginError sur true si l'authentification échoue
          console.error("Login failed. Please check your credentials.");
        }
      },
      (error) => {
        console.error("Error:", error); // Journalisez un message d'erreur
        console.log("Error:", error);
        this.loginError = true; // Définissez loginError sur true s'il y a une erreur lors de la connexion
      }
    );
  }
}
