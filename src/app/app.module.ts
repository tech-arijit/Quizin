import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbIconModule, NbActionsModule, NbContextMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
// import { MaterialsModule } from './material.module';
import { MaterialsModule } from './@anguller/agModules/material.module';
import { AlterEgoDirective } from './@core/shared/alter-ego.directive';
import { UserNameDirective } from './@core/shared/user-name.directive';

@NgModule({
  declarations: [
    AppComponent,
    AlterEgoDirective,
    UserNameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    // NbLayoutModule,
    // NbIconModule,
    // NbActionsModule,
    // NbContextMenuModule,
    // NbEvaIconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
