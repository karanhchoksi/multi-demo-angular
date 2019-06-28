import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient

  ) { }

  getUserData(): Observable<any>{
    let url = "https://reqres.in/api/users?page=2";
    return this.http
      .get(url)
      .pipe(tap(_ => this.log(`user signed in`)));
  }

  addUser(data):Observable<any>{
    let url = "https://reqres.in/api/users";
    return this.http.post(url, data).pipe(tap(data =>{
      this.log('add user');
    }))
  }


  deleteUser(id):Observable<any>{
    let url = "https://reqres.in/api/users/";
    return this.http.delete(url + id)
      .pipe(tap(data =>{
        this.log("delete user");
      }));
  }
  updateUser(id, data):Observable<any>{
    let url = "https://reqres.in/api/users/"+ id;
    return this.http.put(url, data)
      .pipe(tap(data =>{
        this.log(data)
      }));
  }
  getUserById(id): Observable<any>{
    let url = "https://reqres.in/api/users/"+ id;
    return this.http.get(url)
      .pipe(tap(data =>{
      console.log("=======", data);
      }));
  }

  log(message){
    console.log(message);
  }
}
