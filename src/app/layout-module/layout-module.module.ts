import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    NavBarComponent,
    SideBarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModuleModule { }
