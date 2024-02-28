import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{


  details :any


  constructor(
    private router:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.router.queryParams.subscribe((res:any)=>{
      this.details = res
    })
  }

}
