import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
