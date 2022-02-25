import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BottomComponent } from './bottom/bottom.component';
import { NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [
    NavbarComponent,
    ContentComponent,
    SidebarComponent,
    BottomComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
  ],
  exports: [
    NavbarComponent,
    ContentComponent,
    SidebarComponent,
    BottomComponent
  ]
})
export class LayoutModule { }
