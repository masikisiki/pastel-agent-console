import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { SchedulerOption } from 'src/app/models/scheduler-option';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit {

  @Input()
  data = {};

  @Input()
  schedulerOptions = new Array<SchedulerOption>();


  @Output()
  onSaveChanges: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }
  excluded(key) {
    return key === '$id' || key === 'Id' || key === 'Active' || key === 'FetchDate' || key === 'InsertDate' || key === 'Schedule'
  }

  getKeys(data: {}): string[] {
    return Object.keys(data);
  }

  dataChange($event, key) {
    this.data[key] = $event.target.value;
  }

  emitSaveEvent() {
    this.onSaveChanges.emit(this.data);
  }
}
