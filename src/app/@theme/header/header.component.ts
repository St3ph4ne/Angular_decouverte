import { NbMenuItem, NbSidebarService } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  profileMenu = [
    {
      title : 'Profile',
      icon : 'person-outline'
    },
    {
      title : 'settings',
      icon : 'settings-2-outline'
    },
    {
      title : 'logout',
      icon : 'unlock-outline'
    }
  ] as NbMenuItem[];

  constructor(
    private sidebarService: NbSidebarService
  ) { }

  ngOnInit(): void {
  }


  toggleSidebar(): boolean{
    this.sidebarService.toggle(true,'menu-sidebar');
    return false;
  }

}
