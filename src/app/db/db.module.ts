import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentComponent } from './agent/agent.component';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { InformationComponent } from './information/information.component'; // Importez InformationComponent
import { LoginComponente } from './login/login.component';
import { UpdateEmployeComponent } from './update-employe/update-employe.component';
import { CommentComponent } from './comment/comment.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { HomeComponent } from './home/home.component';

const dbRoutes: Routes = [
  {path: "home",component: HomeComponent},
  { path: "agent", component: AgentComponent },
  { path: "login", component: LoginComponente },
  { path: "employes", component: EmployeListComponent },
  { path: "information", component: InformationComponent }, 
  { path: "comment", component: CommentComponent },
  { path: "update/:id", component: UpdateEmployeComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    AgentComponent,
    CommentComponent,
    EmployeListComponent,
    InformationComponent, 
    LoginComponente,
    UpdateEmployeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule, 
    RouterModule.forChild(dbRoutes)
  ]
})
export class DbModule { }
