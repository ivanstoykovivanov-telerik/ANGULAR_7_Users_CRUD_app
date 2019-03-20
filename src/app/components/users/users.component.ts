import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'] 
})
export class UsersComponent implements OnInit {
  users: User[];  
  user: User = {
    firstName: '', 
    lastName: '',
    email: ''
  }; 
  showExtended : boolean = true ; 
  disableAdd: boolean = true; 
  currentClasses = {};
  currentStyles = {}; 
  showUserForm : boolean = true; 
  @ViewChild('userForm') form: any ;  
  data: any;  

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    }); 
    
    this.userService.getUsers().subscribe(users => {
        this.users = users;
    });
     
    this.setCurrentClasses();
    this.setCurrentStyles();  
  }

  //********* */

  addUser(){
    this.user.isActive = true; 
    this.user.registered = new Date();  
    this.userService.addUser(this.user); 
    console.log(this.user);

    //clear the form 
    this.user = {
      firstName: '', 
      lastName: '',
      email: ''
    }
  }

  setCurrentClasses(){
    this.currentClasses = {
      'btn-success' : this.disableAdd, 
       'big-text' : this.disableAdd
    }
  }

  setCurrentStyles(){
    this.currentStyles = {
      'padding-top' : this.showExtended ? '0' : '40px', 
      'font-size' : this.showExtended ? '' : '40px'
    }
  }

  toggleHide(user: User){
    user.hide = !user.hide; 
  }

  onSubmit({value, valid}: {value: User, valid: boolean}){
    if(valid){
      value.isActive = true; 
      value.registered = new Date(); 
      value.hide = true;  
      //this.users.unshift(value); 
      this.userService.addUser(value); 
      //reset the form 
      this.form.reset(); 
    }else{
      console.log("Form is not valid" );
    }
  }
}
