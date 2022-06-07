import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningCardListComponent } from './learning-card-list/learning-card-list.component';

const routes: Routes = [
  {path:"",component:LearningCardListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
