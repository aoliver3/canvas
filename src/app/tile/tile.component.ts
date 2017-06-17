import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {

  private tileStyle = { };

  constructor() { }

  private onMouseClick():void {
    this.tileStyle = {
      'background-color': 'red'
    };
  }

}