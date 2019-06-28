import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../services/user.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ModalDirective} from 'ngx-bootstrap';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  @ViewChild('autoShownModal') autoShownModal: ModalDirective;

  message:string;

  constructor(private userService:UserService) { }

  users:any;
  updateUserObj:any;

  ngOnInit() {
    this.users = JSON.parse(localStorage.getItem('user'));

    this.userService.getUserData().subscribe(res =>{
      this.users = res.data;
    },(error: HttpErrorResponse) =>{
      console.log("========error======", error.message);
    });

  }

  delete(id){
    this.userService.deleteUser(id)
      .subscribe(data =>{
        console.log("=>>>>>", data);
      },(error: HttpErrorResponse) =>{
        console.error("getting error from delete user", error.message);
      });
  }



  getUserDetails(id){
    this.userService.getUserById(id)
      .subscribe(data =>{
        this.autoShownModal.show();
        this.updateUserObj = data.data;
      },error =>{
        console.error("getting error from get user by id", error);
      })
  }

  edit(){
    this.userService.updateUser(this.updateUserObj.id, this.updateUserObj)
      .subscribe(res =>{
        this.autoShownModal.hide()
      },error =>{
        console.error("getting error from update user", error);
      })
  }


  hideModal(): void {
    this.autoShownModal.hide();
  }



}
