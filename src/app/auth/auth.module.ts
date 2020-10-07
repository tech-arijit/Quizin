import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MaterialsModule } from '../@anguller/agModules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
