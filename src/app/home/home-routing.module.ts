import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home.component';

const home_routes: Routes = [
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(home_routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
