import { Component, OnInit, Inject, Injectable, PLATFORM_ID, Output, EventEmitter } from '@angular/core';
import { student } from 'src/model/student';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { AddService } from './add.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  sex: string;
  studentToAdd: student = {
    dateOfBirth : null,
    name : null,
    lastName : null,
    idNumber : null,
    sex : false,
    id : 0
  };

  constructor( private http: HttpServiceService, public backDrop: AddService ) { }

  ngOnInit(): void {
  }

  add() {

    if (this.sex == "Male") {
      this.studentToAdd.sex = false;
    } else {
      this.studentToAdd.sex = true;
    }

    this.http.put(this.studentToAdd);
  }
}
