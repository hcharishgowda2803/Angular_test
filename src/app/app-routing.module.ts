import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// we can declare path of user list here only , im keeping it in separate module

const routes: Routes = [
  {path:'', loadChildren:()=> import('./modules/user.module').then(m=>m.UserModule)},

];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
