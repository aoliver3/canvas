import { Injectable } from '@angular/core';

@Injectable()
export class ColorSelectionService {

  selectedColor: string = 'black'; //color at app start

  constructor() { }

}