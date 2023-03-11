import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendrier2024',
  templateUrl: './calendrier2024.component.html',
  styleUrls: ['./calendrier2024.component.scss']
})
export class Calendrier2024Component implements OnInit {

  constructor(private router: Router) { }

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
