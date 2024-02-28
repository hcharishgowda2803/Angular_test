import { Injectable } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ExtraService} from "./extra.service";

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(
    private toastCtrl: ExtraService
  ) { }



  handleError(error: HttpErrorResponse): void {
    console.log('handling error', error);
    switch (error.status) {
      case 0:
        this.presentToast('Server timeout');
        break;
      case 401:
        // unauthorised
        this.logoutOutUser();
        break;
      case 403:
        this.logoutOutUser();
        break;
      case 404:
        this.toastCtrl.showError(error.error.response.message);
        break;
      default:
        this.toastCtrl.showError(error.message);
    }

  }


   presentToast(message:any) {
     this.toastCtrl.showError(message)
  }


  logoutOutUser(){
    localStorage.clear();
  //   navigate to required page
  }

}
