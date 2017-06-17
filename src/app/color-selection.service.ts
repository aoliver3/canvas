import { Injectable } from '@angular/core';

@Injectable()
export class ColorSelectionService {

  selectedColor: string;

  constructor() { }

  setSelectedColor(colorSelection: string): void {
    console.log('Selected color from Service = ' + colorSelection)
    this.selectedColor = colorSelection;
  }

  getSelectedColor(): string {
    console.log('Color being set = ' + this.selectedColor)
    return this.selectedColor;
  }

}