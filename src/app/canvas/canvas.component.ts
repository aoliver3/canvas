import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  private tileCanvas: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.generateTileCanvas(100);
  }

  private generateTileCanvas(numberOfTiles: number): void {
    for (let i=0; i<numberOfTiles; i++) {
      let tile: string = '';
      this.tileCanvas.push(tile);
    }
  }

}
