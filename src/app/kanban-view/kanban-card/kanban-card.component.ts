import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.css']
})
export class KanbanCardComponent implements OnInit {

  @Output() main_id: EventEmitter<any> = new EventEmitter<any>();

  @Input() card;

  cardStyle: string;

  constructor() {
    this.cardStyle = 'not_active'
  }

  ngOnInit(): void {
  }

  onCardSelect(id: any, card_id: any) {
    if (this.cardStyle == 'active') {
      this.cardStyle = 'not_active';
    } else {
      this.cardStyle = 'active';
    }
    this.main_id.emit(id + " " + card_id+" "+this.cardStyle);
  }

}
