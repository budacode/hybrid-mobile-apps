import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { PresentationPageMeta } from '../interfaces';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PresentationProvider {

  public activePage: BehaviorSubject<PresentationPageMeta> = new BehaviorSubject<PresentationPageMeta>({
    segmentName: 'welcome',
  });

  constructor() {
    //
  }

  public restart(): void {
    this.activePage.next({
      segmentName: 'welcome',
    });
  }

  public startPresentation(): void {
    this.activePage.next({
      segmentName: 'presentation',
      page: 1,
    });
  }

  public thanksForTheAudience(): void {
    this.activePage.next({
      segmentName: 'thank-you',
    });
  }

  public nextPage(): void {
    const currentPage = this.activePage.value.page;

    if (currentPage < environment.presentationPagesCount) {
      this.activePage.next({
        segmentName: 'presentation',
        page: currentPage + 1,
      });
    } else {
      if (this.activePage.value.segmentName === 'presentation') {
        return this.thanksForTheAudience();
      }

      if (this.activePage.value.segmentName === 'welcome') {
        return this.startPresentation();
      }

      if (this.activePage.value.segmentName === 'thank-you') {
        return this.restart();
      }
    }
  }

  public previousPage(): void {
    const currentPage = this.activePage.value.page;

    if (currentPage > 1) {
      this.activePage.next({
        segmentName: 'presentation',
        page: currentPage - 1,
      });
    } else {
      if (this.activePage.value.segmentName === 'thank-you') {
        return this.activePage.next({
          segmentName: 'presentation',
          page: environment.presentationPagesCount,
        });
      }

      if (this.activePage.value.segmentName === 'presentation') {
        this.restart();
      }
    }
  }
}
