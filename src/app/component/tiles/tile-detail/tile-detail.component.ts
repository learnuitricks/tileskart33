import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TileService } from 'src/app/services/tile.service';
import { ITile } from 'src/app/interfaces/itile';

@Component({
  selector: 'ut-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.css']
})
export class TileDetailComponent implements OnInit {

  tileId:number;
  tile:ITile;
  imagePath:string ="/assets/images/";

  constructor(private activatedRoute:ActivatedRoute, private tileService:TileService) { 
  
  }

  ngOnInit(): void {
    let tileId = +this.activatedRoute.snapshot.paramMap.get('Id');
    let tileName = this.activatedRoute.snapshot.queryParamMap.get('name');
    console.log(tileName);
    console.log(tileId);
    this.tileService.getTile(tileId).subscribe((tile)=>{
      this.tile = tile;
    })

  }

}
