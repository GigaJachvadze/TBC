import { ChangeDetectionStrategy, Component, Inject, Injectable, NgModule, PLATFORM_ID, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-back-drop',
  templateUrl: './back-drop.component.html',
  styleUrls: ['./back-drop.component.css']
})

export class BackDropComponent implements OnInit {

  constructor(public backdropService: BackDropService) {
  }

  ngOnInit(): void {
  }

}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [BackDropComponent],
  exports: [BackDropComponent]
})

export class BackDropModule {
}

@Injectable({
  providedIn: 'root'
})


export class BackDropService {
  private _event$: Subject<boolean> = new Subject<boolean>();
  event$ = this._event$.asObservable();

  constructor( @Inject(DOCUMENT) private document: Document , @Inject(PLATFORM_ID) private platformId: object) {
  }

  open(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this._event$.next(true);
  }

  close(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this._event$.next(false);
  }
}
