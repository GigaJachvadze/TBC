import { Component, Input, OnInit } from '@angular/core';
import { student } from 'src/model/student';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})

export class InfoBoxComponent implements OnInit {
  @Input() data: student;

  constructor() { }

  ngOnInit(): void {
  }

}
