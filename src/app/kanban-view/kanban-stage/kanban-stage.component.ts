import { Component, OnInit, Input, ɵConsole, EventEmitter, Output } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-stage',
  templateUrl: './kanban-stage.component.html',
  styleUrls: ['./kanban-stage.component.css']
})
export class KanbanStageComponent implements OnInit {

  @Input() stage;
  @Output() main_id:EventEmitter<any> = new EventEmitter<any>();

  @Output() event:EventEmitter<any> = new EventEmitter<any>(); 

  constructor() { }

  ngOnInit(): void {
  }
  dosome(main_id:any){
    this.main_id.emit(main_id);
  }


}
