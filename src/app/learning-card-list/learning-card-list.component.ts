import { Element } from '@angular/compiler';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { LearningCardListItemComponent } from './learning-card-list-item/learning-card-list-item.component';
import { LearningCardModelService } from './learning-card-model.service';
import { LearningCardModel } from './learning-card.model';


@Component({
  selector: 'app-learning-card-list',
  templateUrl: './learning-card-list.component.html',
  styleUrls: ['./learning-card-list.component.css']
})
export class LearningCardListComponent implements OnInit {

  cardsContent: LearningCardModel[] 

  constructor(private cardContentService: LearningCardModelService, private window:Window, private el: ElementRef) {
    this.cardsContent = this.cardContentService.getLearningCards()
   }

   @ViewChildren('myCard')
  myChildren!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.checkBoxes()
  }

  checkBoxes(){
    const triggerBottom = window.innerHeight/5*4;
    console.log(triggerBottom);

    const elements = this.el.nativeElement.querySelectorAll('.box');

    elements.forEach((elem: any)=>{
      const boxTop = elem.getBoundingClientRect().top
      console.log(boxTop);

      if(boxTop < triggerBottom)
        elem.classList.add('show');
      else elem.classList.remove('show');
      
    })

  }

  doSomething(){
    console.log("scroll");
    console.log(this.myChildren);
    const elements = this.el.nativeElement.querySelectorAll('.box');

    elements.forEach((elem: any)=>{
      const boxTop = elem.getBoundingClientRect().top
      console.log(boxTop);

    })
    
    
    console.log(elements);
    // console.log(this.myChildren.first.nativeElement);
    this.myChildren.forEach(elem =>{
      console.log(elem);
      // console.log(elem)
    })
  
  }

}
