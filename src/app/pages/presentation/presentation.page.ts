import { Component } from '@angular/core';
import { PresentationProvider } from '../../providers/presentation.provider';
import { Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-presentation',
  templateUrl: 'presentation.page.html',
  styleUrls: ['presentation.page.scss'],
})
export class PresentationPage {

  public activePage: number = 1;
  private pageNavigationSubscribed: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly presentationProvider: PresentationProvider,
  ) {}

  public ionViewWillEnter(): void {
    this.pageNavigationSubscribed.next(true);
    this.initPageNavigation();
  }

  public ionViewWillLeave(): void {
    this.pageNavigationSubscribed.next(false);
  }

  private initPageNavigation(): void {
    this.presentationProvider.activePage
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.pageNavigationSubscribed),
      ).subscribe(page => {
        if (page && page.page) {
          this.activePage = page.page;
        }
      });
  }
}
