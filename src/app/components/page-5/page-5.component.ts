import { Component } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-page-5',
  templateUrl: 'page-5.component.html',
  styleUrls: ['page-5.component.scss'],
})
export class Page5Component {

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
