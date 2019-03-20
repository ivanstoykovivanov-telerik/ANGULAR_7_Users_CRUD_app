import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[]; 
  data: Observable<any>; 
  
  constructor() {
    this.users =[ 
      {
        firstName : "John", 
        lastName : "Doe" ,
        email : 'doe.cool@gmail.com', 
        registered : new Date('01/02/2018 08:30:00' ), 
        isActive : true,  
        hide: false
      }, 
      { 
        firstName : "James", 
        lastName : "Donaldson" ,
        email : 'donaldson.123@gmail.com', 
        registered : new Date('01/02/2018 08:30:00' ), 
        isActive : true,  
        hide: false
      }, 
      {
        firstName : "Jose", 
        lastName : "Careras" ,
        email : 'careras.jose@gmail.com', 
        registered : new Date('01/02/2018 08:30:00' ), 
        isActive : true,  
        hide: false
      }
    ]
   }

  getUsers(): Observable<User[]> {
    return of(this.users); 
  }

  addUser(user: User){
    this.users.unshift(user);
  }


  //Just an Example : 
  getData(){
    this.data = new Observable(observer =>{
      setTimeout(() => {
        observer.next(1)
      }, 1000);
      
      setTimeout(() => {
        observer.next(2)
      }, 1000); 

      setTimeout(() => {
        observer.next(3)
      }, 1000); 

      setTimeout(() => {
        observer.next({name: "Brad"})
      }, 1000); 
    });
    return this.data; 
  }

}
