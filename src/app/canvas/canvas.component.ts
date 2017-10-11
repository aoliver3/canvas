import { Component, OnInit } from '@angular/core';
import { TileComponent } from '../tile/tile.component';
import { ColorSelectionService } from '../color-selection.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  private tileCanvas: Array<TileComponent> = [];

  constructor(private colorSelectionService: ColorSelectionService) { }

  ngOnInit() {
    this.generateTileCanvas();
  }

  private generateTileCanvas(): void {
    this.tileCanvas = this.resetTileCanvas(100); //tiles at app start
  }

  private resetTileCanvas(numberOfTiles: number): Array<TileComponent> {
    let tileCanvas: Array<TileComponent> = [];
    for (let i=0; i<numberOfTiles; i++) { 
      let tile = new TileComponent(this.colorSelectionService);
      tileCanvas.push(tile);
    }
    return tileCanvas;
  }

}
