import {ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {ErrorHandlerService} from "./services/error-handler.service";
import { UserDetailsComponent } from './view/user-details/user-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()

  ],
  providers: [
    // {provide:ErrorHandler, useClass:ErrorHandlerService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
