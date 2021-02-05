import { Component, ViewEncapsulation, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { EmployeeService } from '../shared/employee.service'
import {Employee} from './model/employee';

@Component({
  selector: 'a-card',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmployeeService],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'Angular App';




  //studentData: Employee[];
  studentData=[
    {
      "id": 1,
      "firstname": "Amol",
      "lastname": "Shinde",
      "dob": "27-09-1991",
      "gender": "Male",
      "address": "Pune"
    },
    {
      "id": 2,
      "firstname": "Majahar",
      "lastname": "Shaikh",
      "dob": "03-02-1990",
      "gender": "Male",
      "address": "Satara"
    },
    {
      "id": 3,
      "firstname": "Ankush",
      "lastname": "Changole",
      "dob": "25-05-1992",
      "gender": "Male",
      "address": "Amaravati"
    }
  ];
  details:any;
  studentRecord: any;

  updatedStdRec: any;

  @Output() selectedStudent = new EventEmitter<string>();
  @Output() editStudentRecord = new EventEmitter<boolean>();
  private _empService;

  constructor(private location: Location, private empService: EmployeeService) {
    console.log('Inside constructor');
    // this._empService=empService;   
    // this._empService.getAllEmployee().subscribe((data)=>{this.studentData=data});

    //this.getEmp();
  }

  ngOnInit() {
    console.log('Inside onInit');
    //this.getEmployee();
    //this.getEmp();
    // this._empService.getAllEmployee().subscribe((data)=>
    // {
    //   window.localStorage.setItem('studentData',data)
    //   this.details=window.localStorage.getItem('studentData');
    // this.title='Test'
    // });

    //console.log('init '+ JSON.stringify(this.studentData))
  
    //this.getEmployee();
    // let self=this;
    //   self._empService.getAllEmployee().subscribe((data) => {
    //   self.studentData.push(data);
    //   // return this.studentData;
    //   console.log(JSON.stringify(data))
    //   console.log(self.studentData);
    // });

    //window.localStorage.setItem('studentData',data)

    
    // if (typeof (Storage) !== "undefined") {
    //   if (window.localStorage && window.localStorage.getItem('studentData')) {
    //     let newRecord = window.localStorage.getItem('studentData');
    //     if (newRecord) {
    //       this.studentData = JSON.parse(newRecord);
    //     } else {
    //       this.studentData = [];
    //     }
    //   } else {
    //     this.studentData = [];
    //   }
    // }
  }

  ngAfterViewInit(){

    //this.getEmp();
    // this.getEmployee();
    // console.log('After init '+this.studentData)
    // // this._empService.getAllEmployee().subscribe((data)=>
    // // {
    // //   window.localStorage.setItem('studentData',data)
    // //   this.details=window.localStorage.getItem('studentData');
    
    // // });

    // // console.log('details'+this.details)

    console.log('After View Init ' +this.studentData);
  }

  getEmp(){
  fetch("http://localhost:3000/studentData/")
      .then(res => res.json())
      .then(
        (result) => {
          console.log('result'+result)
          this.studentData=result;

          //this.render();
        },
        (error) => {
          console.log(error);
        }
      )
  }

  getEmployee(): Employee[] {
    return this._empService.getAllEmployee()
    // .subscribe((data)=>{
    //   this.studentData=data;
    //   this.title='Test'
    //   console.log(this.studentData);
    // });
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
      this.selectedStudent.emit(JSON.stringify(recordToModify))
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
