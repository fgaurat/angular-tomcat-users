import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  list$:Observable<User[]>

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.list$ = this.userService.findAll()
  }

}
