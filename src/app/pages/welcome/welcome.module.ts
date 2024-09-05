import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MatButtonModule } from '@angular/material/button';
import { NameModalModule } from 'src/app/modals/name-modal/name-modal.module';

@NgModule({
  declarations: [
    WelcomeComponent,
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    MatButtonModule,
    PipesModule,
    NameModalModule,
  ]
})
export class WelcomeModule { }
