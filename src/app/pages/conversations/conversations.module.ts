import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversationsComponent } from './conversations.component';
import { ConversationsRoutingModule } from './conversations-routing.module';



@NgModule({
  declarations: [
    ConversationsComponent
  ],
  imports: [
    CommonModule,
    ConversationsRoutingModule,
  ]
})
export class ConversationsModule { }
