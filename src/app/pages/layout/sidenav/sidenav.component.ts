import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from 'src/app/@anguller/agModules/pages-menu';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  menu = MENU_ITEMS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
