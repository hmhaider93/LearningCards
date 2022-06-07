import { Component, Input, OnInit } from '@angular/core';
import { LearningCardModel } from '../learning-card.model';

@Component({
  selector: 'app-learning-card-list-item',
  templateUrl: './learning-card-list-item.component.html',
  styleUrls: ['./learning-card-list-item.component.css']
})
export class LearningCardListItemComponent implements OnInit {

  @Input()
  cardContent!: LearningCardModel; 
  constructor() { }

  ngOnInit(): void {
  }

}
