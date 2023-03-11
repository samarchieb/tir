import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  constructor( private router: Router) {  }

  ngOnInit(): void {
    
  }
  navigateTo(value: any) {
    if (2022) {
        this.router.navigate(["/calendrier2022"]);
    }else if(2023) {
      this.router.navigate(["/Calendrier"]);
    }
  else if(2024) {
    this.router.navigate(["/calendrier2024"]);
}

    return false;
}
}
