import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { MainPagePageRoutingModule } from './main-page-routing.module';

import { MainPage } from './main-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainPagePageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainPage
      }
    ])
  ],
  declarations: [MainPage]
})
export class MainPageModule {}
