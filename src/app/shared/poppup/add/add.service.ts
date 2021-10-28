import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { BackDropService } from '../../back-drop';

@Injectable({
  providedIn: 'root'
})
export class AddService {
  private _event$: Subject<boolean> = new Subject<boolean>();
  event$ = this._event$.asObservable();
  listener;

  constructor( @Inject(DOCUMENT) private document: Document , @Inject(PLATFORM_ID) private platformId: object, private backDrop: BackDropService) {}

  open(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.listener = this.backDrop.event$.subscribe(e => {
      if (!e) {
        this.close();
      }
    });
    this.backDrop.open();
    this._event$.next(true);
  }


  close(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.listener.unsubscribe();
    this.backDrop.close();
    this._event$.next(false);
  }
}
