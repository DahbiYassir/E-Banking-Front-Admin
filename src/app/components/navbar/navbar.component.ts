import { Component, OnInit } from '@angular/core';
import { NavbarsService } from 'src/app/services/navbars.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  username :String;
  constructor(public nav : NavbarsService) { }

  ngOnInit(): void {
    this.username=sessionStorage.getItem('username');
  }

}
