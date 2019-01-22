import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Page1Component } from './page-1.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [Page1Component],
  exports: [Page1Component],
})
export class Page1ComponentModule {}
