import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {
  email!:string;
  password!:string ;
    constructor( private router: Router) { }
  
    ngOnInit(): void {
    }
  Loginuser(){
    if(this.email=="federation@gmail.com" &&  this.password =="federationtir"){
      this.router.navigate(['/club']);
    }else{
      console.log("error")
    }
  }
  }
  
