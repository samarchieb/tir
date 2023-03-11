import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
email!:string;
password!:string ;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
Loginuser(){
  if(this.email=="federation@gmail.com" &&  this.password =="federationtir"){
    this.router.navigate(['/national']);
  }else{
    console.log("error")
  }
}
}
