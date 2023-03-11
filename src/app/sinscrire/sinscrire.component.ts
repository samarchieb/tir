import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sinscrire',
  templateUrl: './sinscrire.component.html',
  styleUrls: ['./sinscrire.component.scss']
})
export class SinscrireComponent implements OnInit {
  email!:string;
  password!:string ;
    constructor( private router: Router) { }
  
    ngOnInit(): void {
    }
  Loginuser(){
    if(this.email=="federation" &&  this.password =="federation"){
      this.router.navigate(['/International']);
    }else{
      console.log("error")
    }
  }
  }
  