import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilesComponent } from './components/files.component';

import { FilesRoutingModule }     from './files-routing.module';

import { ElementsModule }  from './../elements/elements.module';

@NgModule({
  declarations: [FilesComponent],
  imports: [
    CommonModule,
    FilesRoutingModule
  ],
  exports:[
    ElementsModule,
    //HighlightDirective
  ]
})
export class FilesModule { }
