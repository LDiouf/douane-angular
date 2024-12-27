import { Component, OnInit } from '@angular/core';
import { Information } from '../information';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit{

  informations: Information[] = [];

  ngOnInit(): void {
    this.getInformations();
  }

  constructor(private userService: UserService, private router: Router) { }

  private getInformations() {
    this.userService.getComment().subscribe(res => {
      console.log(res, "res==>");
      this.informations = res.data; // Access the 'data' property to get the array of employees
    });
  }

  deleteComment(id: number) {
    this.userService.deleteComment(id).subscribe(data => {
      console.log(data);
      this.getInformations(); // Update the employee list after deletion
    });
  }

}
