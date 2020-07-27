import { Injectable } from '@angular/core';
import { ITile } from '../interfaces/itile';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';



@Injectable(
  
)
export class TileService {

  tilesURL:string = "http://demo8499217.mockable.io/tiles";
   tiles;
    
  constructor(private httpClient:HttpClient) { }

  getTiles():Observable<Array<ITile>>{
    return this.httpClient.get<Array<ITile>>(this.tilesURL).pipe(catchError(this.handleError));
    
  }

  getTile(id:number):Observable<ITile>{
    return this.httpClient.get<ITile>(this.tilesURL+`/${id}`).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse:HttpErrorResponse){
    if(errorResponse.status === 404){
      console.error(`client side error ${errorResponse.error.message}`);
    }
    else
    {
      console.error(`server side error ${errorResponse}`)
    }
   return  throwError('Problem in Back End. Will get resumed soon');

  }

  performFilter(arrayToFilter:Array<ITile>,filterText:string,filterOption:string):Array<ITile>{
    var tempFilter = arrayToFilter.filter(function(tile){
      if(this.fO == "name"){
          return tile.name.includes(this.fT.toLowerCase());
      }
    },{"fT":filterText,"fO":filterOption})

    return tempFilter;
  }
  getCurrentLocale(){
    return navigator.language;
  }
}
