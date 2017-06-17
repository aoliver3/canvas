import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  
  private tileCanvas: Array<string> = [];

  constructor() { }

  ngOnInit() {
    this.generateTileCanvas(10);
  }

  private generateTileCanvas(numberOfTiles: number): void {
    for (let i=0; i<numberOfTiles; i++) {
      let tile: string = '';
      this.tileCanvas.push(tile);
    }
  }

}
