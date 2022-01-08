import { NbActionsModule, NbLayoutModule, NbSidebarComponent, NbSidebarModule, NbThemeModule, NbMenuModule, NbActionsComponent, NbUserModule, NbContextMenuModule } from '@nebular/theme';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbIconModule } from '@nebular/theme';

import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { MATERIAL_LIGHT_THEME } from './styles/material/theme.material-light';
import { MATERIAL_DARK_THEME } from './styles/material/theme.material-dark';

const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  LayoutComponent,
]

const NB_MODULES = [

  NbLayoutModule,
  NbActionsModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbMenuModule,
  NbIconModule,
  NbEvaIconsModule
]


@NgModule({
  declarations: [

    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...NB_MODULES,
  ],
  exports: [
    CommonModule,
    ...COMPONENTS
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          { name: 'default' },
          [DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME, MATERIAL_LIGHT_THEME, MATERIAL_DARK_THEME]
        ).providers
      ],
    };
  }
}
