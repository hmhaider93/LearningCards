import { Injectable } from '@angular/core';
import { LearningCardModel } from './learning-card.model';

@Injectable({
  providedIn: 'root'
})
export class LearningCardModelService {

  learningCards: LearningCardModel[] = [
    new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German"),
  new LearningCardModel("Deutsch","What is German Called?","It is called German","German")
];

  constructor() { }

  getLearningCards(){
    return this.learningCards.slice();
  }

}
