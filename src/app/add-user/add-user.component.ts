import {Component, OnInit} from '@angular/core';
import {MessageService} from '../MessageService';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(private userService: UserService
  ) { }


  user:any =[];
  userAdd ={
    job:null,
    name:null
  };

  ngOnInit() {
  }

  adduser(){
    this.userService.addUser(this.userAdd)
      .subscribe(res =>{
        console.log("res", res);
    },error =>{
        console.log("==========", error.status);
      })
  }



}
