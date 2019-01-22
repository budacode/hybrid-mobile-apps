import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PresentationPage } from './presentation.page';
import { FooterComponentModule } from '../../components/footer/footer.module';
import { HeaderComponentModule } from '../../components/header/header.module';

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
  ],
  declarations: [PresentationPage],
})
export class PresentationPageModule {}
