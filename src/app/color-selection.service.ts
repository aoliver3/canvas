import { Injectable } from '@angular/core';

@Injectable()
export class ColorSelectionService {

  selectedColor = {
    "background-color": "black"
  }

  constructor() { }

}