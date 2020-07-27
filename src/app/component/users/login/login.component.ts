import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  userName:string ="";
  password:string ="";
  country ="india";
  constructor(private router:Router, private httpClient:HttpClient, private userService:UserService) { }

  login(){
    if(this.userName == ""){
      alert('user name is empty');
    }
    else{
      //
      let user = {
        "userName": this.userName,
        "password": this.password
      }

      this.userService.AutenticateUser(user).subscribe((token)=>{
        sessionStorage.setItem('token', JSON.stringify(token));
        this.router.navigate(['/tiles']);
      })
      //userServce.Authenticate// token. store browser
      
     
    }
  } 

}
