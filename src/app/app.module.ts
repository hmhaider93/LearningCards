import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { LearningCardListComponent } from './learning-card-list/learning-card-list.component';
import { LearningCardListItemComponent } from './learning-card-list/learning-card-list-item/learning-card-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    LearningCardListComponent,
    LearningCardListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide:Window, useValue: window}],
  bootstrap: [AppComponent]
})
export class AppModule { }
