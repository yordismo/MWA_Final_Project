import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'app/auth/_services/token-storage.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/table-list', title: 'Courses',  icon:'content_paste', class: '' },
    { path: '/addCourse', title: 'Add Courses',  icon:'person', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(private tokenStorage: TokenStorageService,) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

  
  signOut() {
    clearInterval(parseInt(sessionStorage.getItem('userTimerId'), 10));
    this.tokenStorage.signOut();
    window.location.reload();
}
}
