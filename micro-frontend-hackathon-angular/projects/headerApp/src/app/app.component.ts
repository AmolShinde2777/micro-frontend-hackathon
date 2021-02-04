import { Component, ViewEncapsulation, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'a-card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'Angular App';

  studentData: any;
  studentRecord: any;

  updatedStdRec: any;

  @Output() selectedStudent = new EventEmitter<string>();
  @Output() editStudentRecord = new EventEmitter<boolean>();

  constructor(private location: Location) {
    console.log('Inside constructor');
  }

  ngOnInit() {
    console.log('Inside onInit');
    if (typeof (Storage) !== "undefined") {
      if (window.localStorage && window.localStorage.getItem('studentData')) {
        let newRecord = window.localStorage.getItem('studentData');
        if (newRecord) {
          this.studentData = JSON.parse(newRecord);
        } else {
          this.studentData = [];
        }
      } else {
        this.studentData = [];
      }
    }
  }

  editRecord(ev: Event, index) {
    if (this.studentData.length > 0) {
      let recordToModify = this.studentData[index];
      this.editStudentRecord.emit(true);
      window.localStorage.setItem('editRecord', JSON.stringify(recordToModify));
      
    }
  }

  viewRecord(ev: Event, index) {
    if (this.studentData.length > 0) {
      let recordToModify = this.studentData[index];
      this.selectedStudent.emit('Selected Student: ' +JSON.stringify(recordToModify))
      window.localStorage.setItem('viewRecord', JSON.stringify(recordToModify));
      // let targetEl = document.getElementById('vuejsAppId');
      // targetEl.click();
    }
  }

  deleteRecord(ev: Event, index) {
    if (this.studentData.length > 0) {
      let deleteStudentRec = this.studentData;
      deleteStudentRec.splice(index, 1);
      this.studentData = deleteStudentRec;
      window.localStorage.setItem('studentData', JSON.stringify(this.studentData));
    }
  }
}
