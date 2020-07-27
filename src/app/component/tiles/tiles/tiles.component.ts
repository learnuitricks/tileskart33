import { Component } from '@angular/core';
import { ITile } from 'src/app/interfaces/itile';
import { TileService } from 'src/app/services/tile.service';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css'],
  providers:[TileService]
})
export class TilesComponent  {

  tileName:string = "name";
  imagePath:string ="/assets/images/";
  todayNumber = Date.now();
  filterOptions:Array<string> = ['name','model','price'];
  selectedFilter:string ='';
  filterText:string ='';
  filtedTiles:Array<ITile>;
  tiles:Array<ITile>
  errorMessage:string;
 
  constructor(public tileService:TileService) {

 

    this.tileService.getTiles().subscribe((tilesData)=>{
        this.tiles = tilesData;
        this.filtedTiles = this.tiles;
    },(error)=>{
      this.errorMessage = error;
      console.log(`errror ${error}`);
    })
    
   }

  filter(){
    console.log(this.filterText);
    console.log(this.selectedFilter);
    this.filtedTiles = this.tileService.performFilter(this.tiles,this.filterText,this.selectedFilter);
    console.log(this.filtedTiles);
  }

  


}
