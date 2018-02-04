import { Component, OnInit } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css']
})
export class ControlsComponent implements OnInit {
  @Output() toggleWordsList: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toggleExamMode: EventEmitter<boolean> = new EventEmitter<boolean>();
  isShowContent: boolean = true;

  constructor() { }

  ngOnInit() {
    if (window.innerWidth <= 768) this.isShowContent = false;
  }

  toggleList($event) {
    const flag = $event.target.checked;
    this.toggleWordsList.emit(flag);
  }

  toggleExam($event) {
    const flag = $event.target.checked;
    this.toggleExamMode.emit(flag);
  }

  toggleContent() {
    this.isShowContent = !this.isShowContent;
  }

}
