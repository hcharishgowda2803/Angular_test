import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {UserListComponent} from "../view/user-list/user-list.component";
import {UserDetailsComponent} from "../view/user-details/user-details.component";
import {FormsModule} from "@angular/forms";



const routes: Routes= [
  {path:'', component:UserListComponent},
  {path:'details',component:UserDetailsComponent}
]



@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class UserModule { }
