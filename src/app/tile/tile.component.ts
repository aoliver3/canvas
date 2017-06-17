import { Component, HostListener } from '@angular/core';
import { ColorSelectionService } from '../color-selection.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {

  private tileStyle = { };

  constructor(private colorSelectionService: ColorSelectionService) { }

  private onMouseClick():void {
    this.tileStyle = {
      'background-color': this.colorSelectionService.selectedColor
    };
  }

}