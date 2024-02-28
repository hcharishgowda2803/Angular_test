import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor(
    public router:Router
  ) { }


 public navigateWithData(path:any,query?:any){
    this.router.navigate([path],{queryParams: query})
  }


  public navigate(path:any){
    this.router.navigate([path])
  }

}
