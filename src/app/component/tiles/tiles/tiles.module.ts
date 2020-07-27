import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TilesRoutingModule } from './tiles-routing.module';
import { TilesComponent } from './tiles.component';
import { TileDetailComponent } from '../tile-detail/tile-detail.component';
import { TileComponent } from './tile/tile.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { TileService } from 'src/app/services/tile.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [TilesComponent,TileDetailComponent,TileComponent],
  imports: [
    CommonModule,
    TilesRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers:[TileService]
})
export class TilesModule { }
