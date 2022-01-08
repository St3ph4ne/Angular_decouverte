import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private themeService: NbThemeService
  ) { }

  ngOnInit(): void {
    this.themeService.changeTheme('corporate');
  }

}
