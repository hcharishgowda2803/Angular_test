import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {ErrorHandlerService} from "./error-handler.service";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {


  static apiBaseUrl = "https://jsonplaceholder.typicode.com"

  constructor(
    private http:HttpClient,
    private errorHandler:ErrorHandlerService
  ) {}



//   if we want to pass the jwt token in headers to authentication
  apiHeaders(){
    let token = ""
    // we can store token in localstorage and get assigned to user token here
    const userToken = ""
    return new HttpHeaders().set('Authorization', userToken);
  }




//   function get all collection
//     page_number , filters , limit are extra parameters for pagination, filtering data

  getCollection(end_point:any,page_number:any , filters:{}, limit = 0){

  //   if headers require
    const headers = this.apiHeaders()

  //   todo we can implement pagination filter code here

    // todo passing headers
    // return this.http.get(ApiServiceService.apiBaseUrl+`/${end_point}`, {headers})


    return this.http.get(ApiServiceService.apiBaseUrl+`/${end_point}`).pipe(
      catchError((error:HttpErrorResponse)=>{
        this.errorHandler.handleError(error);
        return throwError(error);
      })
    )
  }











}
