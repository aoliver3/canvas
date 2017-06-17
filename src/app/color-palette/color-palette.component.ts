import { Component, OnInit } from '@angular/core';
import { ColorSelectionService } from '../color-selection.service';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css']
})
export class ColorPaletteComponent implements OnInit {

  private colorChoices: Array<string> = [
    'red',
    'green',
    'blue',
    'purple',
    'yellow',
    'white',
    'black'
  ]

  constructor(private colorSelectionService: ColorSelectionService) { }

  ngOnInit() {
  }

  private setColorSelection(color: string): void {
    this.colorSelectionService.selectedColor = color;
  }

}
