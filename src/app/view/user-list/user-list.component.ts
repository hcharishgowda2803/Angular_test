import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../../services/api-service.service";
import {NavigationService} from "../../services/navigation.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  loading = 0;
  usersDetails:any = []
  nameFilter:any
  emailFilter:any
  filteredUserDetails:any=[]

  constructor(
    private apiCals:ApiServiceService,
    private navCtrl:NavigationService
  ) {}


  ngOnInit() {
    this.getUserData()
  }


  getUserData(){
     this.loading = 1;
     this.apiCals.getCollection('/users',0,{}).subscribe((res)=>{
       this.loading = 0;
       if(res){
         this.usersDetails = res
       }
     },error => {
       this.loading = 0;
       console.log(error)
       throw error
     })
  }


  // filtering the userlist using name and email
  filterUsers(){
    if(!this.nameFilter && !this.emailFilter){
      this.filteredUserDetails = []
    }else{
      if(this.nameFilter){
        this.filteredUserDetails = this.usersDetails.filter((item:any) =>
          item.name.toLowerCase().includes(this.nameFilter.toLowerCase())
        );
      }
      if(this.emailFilter){
        this.filteredUserDetails = this.usersDetails.filter((item:any) =>
          item.email.toLowerCase().includes(this.emailFilter.toLowerCase())
        );
      }
    }

  }



  navToDetails(details:any){
     this.navCtrl.navigateWithData('/details',details)
  }

}
