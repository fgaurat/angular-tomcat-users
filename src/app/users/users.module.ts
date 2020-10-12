import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserListComponent, UserFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports:[
    UserListComponent, UserFormComponent
  ]
})
export class UsersModule { }
