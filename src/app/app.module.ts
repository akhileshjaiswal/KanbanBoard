import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Router, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from  '@angular/material/button';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatIconModule } from  '@angular/material/icon';
import { MatCardModule } from  '@angular/material/card';
import { MatInputModule } from  '@angular/material/input';
import { MatGridListModule } from  '@angular/material/grid-list';
import { MatMenuModule } from  '@angular/material/menu';
import { KanbanViewComponent } from './kanban-view/kanban-view.component';
import { KanbanStageComponent } from './kanban-view/kanban-stage/kanban-stage.component';
import { KanbanCardComponent } from './kanban-view/kanban-card/kanban-card.component';
import { HelpComponent } from './help/help.component';
import { Route } from '@angular/compiler/src/core';
import { LoginComponent } from './login/login.component';
import { MenubarComponent } from './menubar/menubar.component';

const route:Routes=[
  {path:'',component:LoginComponent},
  {path:'kanban',component:KanbanViewComponent},
  {path:'help',component:HelpComponent},
  {path:'login',redirectTo:''}
];

@NgModule({
  declarations: [
    AppComponent,
    KanbanViewComponent,
    KanbanStageComponent,
    KanbanCardComponent,
    HelpComponent,
    LoginComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    DragDropModule,
    MatMenuModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
