import { Component, ViewEncapsulation, OnInit,Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
// import { EmployeeService } from '../shared/employee.service'
// import {Employee} from './model/employee';

@Component({
  selector: 'a-card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'Angular App';
  @Input('studentDetails') studentDetails:any;
  studentRecord: any;
  updatedStdRec: any;

  @Output('selectedStudent') selectedStudent = new EventEmitter<string>();
  @Output('editStudentRecord') editStudentRecord = new EventEmitter<string>();
  

  constructor(private location: Location) {
    console.log('Inside constructor');
  }

  ngOnInit() {
    console.log('Inside onInit');    
  }

  editRecord(ev: Event, index) {
    if (this.studentDetails.length > 0) {
      let recordToModify = this.studentDetails[index];
      this.editStudentRecord.emit(JSON.stringify(recordToModify));
      window.localStorage.setItem('editRecord', JSON.stringify(recordToModify));

    }
  }

  viewRecord(ev: Event, index) {
    if (this.studentDetails.length > 0) {
      let recordToModify = this.studentDetails[index];
      this.selectedStudent.emit(JSON.stringify(recordToModify))
      window.localStorage.setItem('viewRecord', JSON.stringify(recordToModify));
    }
  }

  deleteRecord(ev: Event, index) {
    if (this.studentDetails.length > 0) {
      let deleteStudentRec = this.studentDetails;
      deleteStudentRec.splice(index, 1);
      this.studentDetails = deleteStudentRec;
      window.localStorage.setItem('studentData', JSON.stringify(this.studentDetails));
    }
  }
}
