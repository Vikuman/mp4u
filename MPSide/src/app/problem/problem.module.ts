import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProblemPage } from './problem.page';
// import { Geolocation } from '@ionic-native/geolocation/ngx';
// import { ToastExample } from './problem.page';


const routes: Routes = [
  {
    path: '',
    component: ProblemPage
  }
];

@NgModule({
  imports: [
    // Geolocation,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProblemPage]
})
export class ProblemPageModule {}
