import { Component } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-page-1',
  templateUrl: 'page-1.component.html',
  styleUrls: ['page-1.component.scss'],
})
export class Page1Component {
  public stage: number = 1;

  private isPageActive: Subject<boolean> = new Subject<boolean>();

  public ngOnInit(): void {
    this.isPageActive.next(true);
    fromEvent(document, 'keydown')
      .pipe(
        distinctUntilChanged(),
        takeUntil(this.isPageActive),
      )
      .subscribe(event => {
        if (event && (<any> event).code) {
          const eventCode: string = (<any> event).code;
          if (eventCode === 'KeyP') {
            this.previousStep();
          }

          if (eventCode === 'KeyN') {
            this.nextStep();
          }
        }
      });
  }

  public ngOnDestroy(): void {
    this.isPageActive.next(false);
  }

  private nextStep(): void {
    this.stage++;
  }

  private previousStep(): void {
    if (this.stage > 1) {
      this.stage--;
    }
  }
}
