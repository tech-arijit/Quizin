import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialsModule } from '../@anguller/agModules/material.module';
// import { MaterialsModule } from '../material.module';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { SideNavService } from '../@core/Services/side-nav.service';
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbIconModule, NbActionsModule, NbContextMenuModule, NbMenuModule } from '@nebular/theme';


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialsModule,
    NgMaterialMultilevelMenuModule,
    // NbSidebarModule,
    // NbLayoutModule,
    // NbIconModule,
    // NbActionsModule,
    // NbContextMenuModule,
    // NbMenuModule,
    // NbIconModule,
  ],
  exports: [
    HeaderComponent,
    SidenavComponent,
    FooterComponent
  ],
  providers: [
    SideNavService
  ]
})
export class PagesModule { }
