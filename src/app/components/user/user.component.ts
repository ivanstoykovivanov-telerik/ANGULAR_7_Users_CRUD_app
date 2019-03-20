import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  firstName : string; 
  lastName : string;
  age: number;  
  address;
  stringArray: string[]; 
  numberArray : number[]; 
  mixedArray: any[]; 
  myTuple: [string, number , boolean]; 
  unusable: void; 
  u: undefined; 
  n: null; 


  

  constructor() {
    this.firstName = "John";
    this.lastName = "Doe"; 
    this.age = 30; 
    console.log(this.age);
    this.hasBirthday(); 
    console.log(this.age);

    this.address = {
      street : "Vasil Levksi", 
      city : "Haskovo",
      country : "Bulgaria"
    }

    this.stringArray = ["hello", "world"];
    this.numberArray = [1, 2, 3, 4];
    this.mixedArray = [true, undefined, "hello"];
    this.myTuple = ['hello', 1, true, ]

   }

  ngOnInit() {  
    this.sayHello(); 
  }

  sayHello(){
    console.log(`Hello ${this.firstName} ${this.lastName}`);
  }
 
  addNumbers(num1: number, num2: number): number {
    return num1 + num2; 
  }

  hasBirthday(){
    this.age += 1;  
  }
}
