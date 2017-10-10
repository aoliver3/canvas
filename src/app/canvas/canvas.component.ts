import { Component, OnInit } from '@angular/core';
import { ResetService } from '../reset.service';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  private tileCanvas: Array<string> = [];

  constructor(private resetService: ResetService) { }

  ngOnInit() {
    this.generateTileCanvas();
  }

  private generateTileCanvas(): void {
    this.tileCanvas = this.resetService.resetTileCanvas(100);
  }

}
