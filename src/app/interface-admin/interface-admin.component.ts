import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface-admin',
  templateUrl: './interface-admin.component.html',
  styleUrls: ['./interface-admin.component.scss']
})
export class InterfaceAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  sidebarToggle() {
    var sidebar:any = document.getElementById('sidebar');
   
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}
 profileToggle() {
  var profileDropdown:any = document.getElementById('ProfileDropDown');
    if (profileDropdown.style.display === "block") {
        profileDropdown.style.display = "none";
    } else {
        profileDropdown.style.display = "block";
    }
}
}