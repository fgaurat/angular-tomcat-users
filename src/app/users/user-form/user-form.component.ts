import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm:User = {
    name:"",
    firstName:"",
    password:"",
    userName:""
  }

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  
  createUser(){
    this.userService.save(this.userForm).subscribe()
  }
}
