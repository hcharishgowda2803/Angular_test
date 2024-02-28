import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class ExtraService {

  constructor(private toast:ToastrService) { }



//   success toast
  showSuccess(message: string) {
    this.toast.success(message);
  }


//   error toast
  showError(message: string) {
    this.toast.error(message);
  }



}
