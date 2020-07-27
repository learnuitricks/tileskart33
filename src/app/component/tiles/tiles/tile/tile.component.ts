import { Component, OnInit, Input } from '@angular/core';
import { ITile } from 'src/app/interfaces/itile';
import { TileService } from 'src/app/services/tile.service';

@Component({
  selector: '[ut-tile]',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  providers:[TileService]
})
 export class TileComponent implements OnInit {

  @Input() tile:ITile;
  imagePath:string ="/assets/images/";
  constructor() { }

  ngOnInit(): void {
    //console.log(this.tile)
  }

  changeRating(newRating:number){
    this.tile.rating = newRating;
  }

  updateNewRating(data){
    this.tile.Id
    console.log(data);
    //this.tileService()
  }

}
