import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserComponent } from './user/user.component';
import {DemoMaterialModule} from './material-module';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { ListingTableComponent } from './listing-table/listing-table.component';
import {ModalModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    ViewUserComponent,
    UserComponent,
    ListingTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
