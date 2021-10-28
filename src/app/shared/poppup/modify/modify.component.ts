import { Component, Input, OnInit } from '@angular/core';
import { student } from 'src/model/student';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { ModifyService } from './modify.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  sex: string;
  @Input() studentToModify: student;
  constructor( private http: HttpServiceService, public backDrop: ModifyService) { }

  ngOnInit(): void {
  }

  modify(): void {
    if (this.sex == "Male") {
      this.studentToModify.sex = false;
    } else {
      this.studentToModify.sex = true;
    }
    console.log(this.studentToModify);
    this.http.modify(this.studentToModify);
  }
}
