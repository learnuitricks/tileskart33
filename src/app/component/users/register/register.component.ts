import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'ut-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName:FormControl;
  registerForm:FormGroup;
  message:string;
  zipCodePattern:string = "^[1-9][0-9]{5}$";
  constructor(private fb:FormBuilder, private userService:UserService) { 
  
    this.registerForm =this.fb.group({
      userName: ['',[Validators.required]],
      email:['kim@gmail.com'],
      phoneNumber: ['95384948404'],
      billingAdress: this.fb.group({
        doorNumber: ['151'],
        city: ['blr'],
        zip: ['',[Validators.required,Validators.pattern(this.zipCodePattern)]]
      })
    })
  }

  ngOnInit(): void {
    //this.userName.setValue('kim');
  }

  register(){
    console.log(this.registerForm);
    this.userService.createUser(this.registerForm.value).subscribe((message)=>{
      this.message = message["msg"];
    })
  }


}
