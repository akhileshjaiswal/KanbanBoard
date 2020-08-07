import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanStageComponent } from './kanban-stage.component';

describe('KanbanStageComponent', () => {
  let component: KanbanStageComponent;
  let fixture: ComponentFixture<KanbanStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
