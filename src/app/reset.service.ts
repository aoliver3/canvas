import { Injectable } from '@angular/core';
import { TileComponent } from './tile/tile.component';

@Injectable()
export class ResetService {

  constructor() { }

  resetTileCanvas(numberOfTiles: number): Array<string> {
    let tileCanvas: Array<string> = [];
    for (let i=0; i<numberOfTiles; i++) {
      let tile: string = '';
      tileCanvas.push(tile);
    }
    return tileCanvas;
  }

}
