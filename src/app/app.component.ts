import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { student } from 'src/model/student';
import { HttpServiceService } from './services/http-service.service';
import { Observable, pipe } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { AddService } from './shared/poppup/add/add.service';
import { ModifyService } from './shared/poppup/modify/modify.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "TBC"

  data: student[];
  currentPageData: student[] = [];
  currentPage: number = 1;
  maxPage: number = 1;
  maxDataOnPage: number = 10;

  addPoppupOpened = false;
  modifyPoppupOpened = false;

  studentToModify: student;

  constructor(
    private http: HttpServiceService, private changeDetectionRef: ChangeDetectorRef,
    private addService: AddService, private modifyService: ModifyService) {  }

  ngOnInit(): void {
    // this.generateTestData(41);
    this.http.get().subscribe(e => {
      this.data = e;
      this.generateMaxPages();
      this.generateCurrentPage(this.currentPage);
      this.changeDetectionRef.markForCheck();
      console.log(this.currentPageData)
    })
  }

  generateTestData(numberOfData: number): void {
    let a: student;
    for (let i = 0; i < numberOfData; i++) {
      a = {
        dateOfBirth : "asd",
        name : "dsa",
        lastName : "ert",
        idNumber : null,
        sex : false,
        id : null
      }
      this.data.push(a);
    }
  }

  generateMaxPages(): void {
    if (this.data.length > this.maxDataOnPage) {
      this.maxPage = ((this.data.length - this.data.length % this.maxDataOnPage) / this.maxDataOnPage) + 1;
    } else {
      this.maxPage = 1;
    }
  }

  generateCurrentPage(page: number): void {
    if (page > this.maxPage) {
      return;
    }

    console.log("here")

    let a: student[] = [];
    for (let i = 0; i < this.maxDataOnPage; i++) {
      let index = ((this.currentPage - 1) * this.maxDataOnPage) + i
      if (index > this.data.length - 1) {
        break;
      }
      a.push(this.data[index]);
    }
    this.currentPageData = a;
  }

  changePage(page: number): void {
    this.currentPage = page;

    if (page > this.maxPage) {
      this.currentPage = 1;
    }

    if (page < 1) {
      this.currentPage = this.maxPage;
    }

    this.generateCurrentPage(this.currentPage);
  }

  openAdd(): void {
    console.log(this.addService)
    this.addService.open();
  }

  openModify(student: student): void {
    this.studentToModify = student;
    this.modifyService.open();
  }

  deleteData(student: student): void {
    this.http.delete(student);
  }
}
