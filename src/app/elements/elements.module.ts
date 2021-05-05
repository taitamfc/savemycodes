import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';

import { ElementsSidebarComponent } from './sidebar/sidebar.component';
import { ElementsHeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    ElementsSidebarComponent,
    ElementsHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ElementsSidebarComponent,
    ElementsHeaderComponent
  ]
})
export class ElementsModule { }
