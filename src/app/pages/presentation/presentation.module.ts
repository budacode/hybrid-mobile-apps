import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PresentationPage } from './presentation.page';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { HeaderComponentModule } from '../../components/header/header.module';
import { Page1ComponentModule } from '../../components/page-1/page-1.module';
import { Page2ComponentModule } from '../../components/page-2/page-2.module';
import { Page3ComponentModule } from '../../components/page-3/page-3.module';
import { Page4ComponentModule } from '../../components/page-4/page-4.module';
import { Page5ComponentModule } from '../../components/page-5/page-5.module';
import { Page6ComponentModule } from '../../components/page-6/page-6.module';
import { Page7ComponentModule } from '../../components/page-7/page-7.module';
import { Page8ComponentModule } from '../../components/page-8/page-8.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PresentationPage,
      },
    ]),
    FooterComponentModule,
    HeaderComponentModule,
    Page1ComponentModule,
    Page2ComponentModule,
    Page3ComponentModule,
    Page4ComponentModule,
    Page5ComponentModule,
    Page6ComponentModule,
    Page7ComponentModule,
    Page8ComponentModule,
  ],
  declarations: [PresentationPage],
})
export class PresentationPageModule {}
