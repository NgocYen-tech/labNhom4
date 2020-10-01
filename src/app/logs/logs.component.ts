import { Component, OnInit } from '@angular/core';
import { LogsService} from '../services/logs.service';
// import {ExportService} from '../services/export.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs = [];
  total: number = 0;

  result:any;

  // //xuat excel
  // title = 'angular-exportexcel-example';

  // customers: any = [];

  constructor(
    private logsService: LogsService
    // private exportService: ExportService
    ) { }

  ngOnInit() {
    this.getLogs();
    // this.customers.push( this.result);
  }

  getLogs(){
    // let result: any;
    this.logsService.getList().subscribe((res)=>{
       this.result = res;
      //  console.log(this.result);
    }, err => {
      console.log(err);
    }, () => {
      this.total = this.result.length;
      this.logs = this.result;
      //  console.log("dung roi ", this.logs);
    });
  }

  // export() {
  //   this.exportService.exportExcel(this.customers, 'customers');
  // }

}
