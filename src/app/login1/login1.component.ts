import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.scss']
})
export class Login1Component implements OnInit {
email!:string;
password!:string ;
  constructor( private router: Router) { }

  ngOnInit(): void {
  }
Loginuser(){
  if(this.email=="federation@gmail.com" &&  this.password =="federationtir"){
    this.router.navigate(['/International']);
  }else{
    console.log("error")
  }
}
}
