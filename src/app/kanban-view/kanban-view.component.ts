import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-view',
  templateUrl: './kanban-view.component.html',
  styleUrls: ['./kanban-view.component.css']
})
export class KanbanViewComponent implements OnInit {

  task_name: string;
  category: string;
  id: number;
  id2: number = 1;
  card_id: number;
  sel_task;
  sel_cata;
  cardStyle;
  btn_disable = 'true'
  btn_disable2 = 'true'
  btn_disable3 = 'true'


  stages = [
    {
      id: 1,
      name: 'TO DO',
      cards: []
    },
    {
      id: 2,
      name: 'IN PROGRESS',
      cards: []
    },
    {
      id: 3,
      name: 'READY FOR REVIEW',
      cards: []
    },
    {
      id: 4,
      name: 'DONE',
      cards: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onAddCard() {
    let time = new Date() + "";
    time = time.substring(0, time.length - 30);
    this.stages[0].cards.push({ id: this.id2, name: this.task_name, time: time, category: this.category, card_id: 1 });
    this.id2 = this.id2 + 1;
    this.task_name='';
    this.category='';
  }

  mainCame(main_id: any) {
    const m = main_id + "";
    let arr = m.split(" ");
    this.id = parseInt(arr[0]);
    this.card_id = parseInt(arr[1]);
    this.cardStyle=arr[2];
    for(let i=0;i<this.stages[this.card_id-1].cards.length;i++){
      if(this.stages[this.card_id-1].cards[i].id==this.id){
        this.sel_task=this.stages[this.card_id-1].cards[i].name;
        this.sel_cata=this.stages[this.card_id-1].cards[i].category;
      }
    }

    if(this.card_id!=4){
      this.btn_disable2='false';
    }
    if(this.card_id!=1){
      this.btn_disable='false';
    }

    if(this.cardStyle=='active'){
      this.btn_disable3='false';
    }
    if(this.cardStyle=='not_active'){
      this.btn_disable3='true';
      this.btn_disable='true'
      this.btn_disable2='true'
    }
  }

  onMoveCardForward() {
    let time = new Date() + "";
    time = time.substring(0, time.length - 30);
    const name = this.sel_task;
    const category = this.sel_cata;
    const id = this.id;
    const cid = this.card_id;
    this.stages[cid].cards.push({ id: id, name: name, time: time, category: category, card_id: cid + 1 });
    for (let i = 0; i < this.stages[cid - 1].cards.length; i++) {
      if (this.stages[cid - 1].cards[i].id == id) {
        this.stages[cid - 1].cards.splice(i, 1);
      }
    }
    if(this.card_id==3){
      this.btn_disable2='true';
    }
    this.id=0;
    this.card_id=0;
    this.sel_cata=''
    this.sel_task=''
    this.btn_disable='true';
    this.btn_disable2='true';
    this.btn_disable3='true';
  }


  onMoveCardBackward() {
    let time = new Date() + "";
    time = time.substring(0, time.length - 30);
    const name = this.sel_task;
    const category = this.sel_cata;
    const id = this.id;
    const cid = this.card_id;
    this.stages[cid - 2].cards.push({ id: id, name: name, time: time, category: category, card_id: cid - 1 });
    for (let i = 0; i < this.stages[cid - 1].cards.length; i++) {
      if (this.stages[cid - 1].cards[i].id == id) {
        this.stages[cid - 1].cards.splice(i, 1);
      }
    }
    // if(this.card_id==2){
    //   this.btn_disable='true';
    // }
    this.id=0;
    this.card_id=0;
    this.sel_cata=''
    this.sel_task=''
    this.btn_disable='true';
    this.btn_disable2='true';
    this.btn_disable3='true';
  }

  onDeleteTask(){
    const id = this.id;
    const cid = this.card_id;
    for (let i = 0; i < this.stages[cid - 1].cards.length; i++) {
      if (this.stages[cid - 1].cards[i].id == id) {
        this.stages[cid - 1].cards.splice(i, 1);
      }
    }
    this.btn_disable='true';
    this.btn_disable2='true';
    this.btn_disable3='true';

  }

}
