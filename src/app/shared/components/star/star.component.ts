import { Component, OnInit, Input, OnChanges, SimpleChanges, Output,EventEmitter } from '@angular/core';



@Component({
  selector: 'ut-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {

  @Input() rating;
  @Output() ratingUpdated:EventEmitter<string> = new EventEmitter();
  newRating:string;
  ratingArray:Array<number>=[];

 
  constructor() { 
    console.log('inside constructor' +this.rating);
  }
 
 
  ngOnChanges(changes: SimpleChanges): void {
    console.log('inside changes method' + this.rating);
    //this.ratingArray.splice(0,2);
    this.ratingArray = [];
  for (let index = 0; index < this.rating; index++) {
        this.ratingArray.push(index);
      }
  }

  ngOnInit(): void {
    console.log('inside init method' + this.rating);
    // for (let index = 0; index < this.rating; index++) {
    //   this.ratingArray.push(index);
    // }
 
  }

  updateRating(){
      this.ratingUpdated.emit(this.newRating);
  }

}
