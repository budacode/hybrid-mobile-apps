import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import { PresentationProvider } from './providers/presentation.provider';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private readonly presentationProvider: PresentationProvider,
  ) {
    this.initializeApp();
  }

  public ngOnInit(): void {
    this.initNavigation();
  }

  private initializeApp(): void {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      }
    });
  }

  private initNavigation(): void {
    this.presentationProvider.activePage
      .pipe(distinctUntilChanged())
      .subscribe(page => {
        this.router.navigate([page.segmentName]);
      });

    fromEvent(document, 'keydown')
      .pipe(distinctUntilChanged())
      .subscribe(event => {
        if (event && (<any> event).code) {
          const eventCode: string = (<any> event).code;
          if (eventCode === 'Backspace' || eventCode === 'ArrowLeft') {
            this.presentationProvider.previousPage();
          }

          if (eventCode === 'Enter' || eventCode === 'ArrowRight') {
            this.presentationProvider.nextPage();
          }
        }
      });
  }
}
