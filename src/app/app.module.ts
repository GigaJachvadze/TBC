import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModifyComponent } from './shared/poppup/modify/modify.component';
import { AddComponent } from './shared/poppup/add/add.component';
import { InfoBoxComponent } from './shared/info-box/info-box.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BackDropModule } from './shared/back-drop';
import { HttpClientModule } from '@angular/common/http';
import { genderPipe } from './gender.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ModifyComponent,
    AddComponent,
    InfoBoxComponent,
    genderPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BackDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
