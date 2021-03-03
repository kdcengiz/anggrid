import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-kd-grid',
  templateUrl: './kd-grid.component.html',
  styleUrls: ['./kd-grid.component.css']
})
export class KdGridComponent implements OnInit {
  @Input() getList: any;
  @Output() rowOut=new EventEmitter<any>();
  constructor() { }
  columnList: string[] = [];
  ngOnInit() {
    this.columnList = Object.keys(this.getList[0]);
  }
  clickRow(item){
    this.rowOut.emit(item);
    alert("clickRow")
  }

}
