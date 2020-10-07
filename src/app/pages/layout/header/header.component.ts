import { Component, OnInit, ViewChild } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public state: string;

  menu = [
    // {
    //   title: 'student',
    //   icon: 'home-outline',
    //   link: '/pages/student',
    //   home: true,
    // },

    // {
    //   title: 'Quiz',
    //   icon: 'checkmark-square-outline',
    //   link: '/pages/student/quiz',

    // },
    // {
    //   title: 'Notification',
    //   icon: 'bell-outline',
    //   link: '/pages/student/notifications',

    // },
  ];

  items = [
    // {
    // title: 'Profile',
    // link: '/pages/iot-dashboard',
    // },
    {
      title: 'Change Password',
      link: '/pages/user-management/changepassword',
    },

    {
      title: 'Logout',
      link: '/auth/logout',
    }

  ];

  //user: IUser = JSON.parse(localStorage.getItem('examRideUser'));
  constructor(
    private sidebarService: NbSidebarService,
  ) { }
  ngOnInit(): void {
  }
  toggle() {
    this.sidebarService.toggle(true, 'left');
    return false
  }

}
