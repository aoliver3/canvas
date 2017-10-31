import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css']
})
export class ColorPaletteComponent implements OnInit {

  private colorChoices: Array<string> = [
    'RED',
    'GREEN',
    'BLUE',
    'PURPLE',
    'YELLOW',
    'WHITE',
    'BLACK',
    'ORANGE',
    'BROWN',
    'PINK',
    'TEAL'
  ];

  private colorStyles: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.createButtonStyles();
  }

  private createButtonStyles(): void {
    this.colorChoices.forEach((color: string) => {
      let buttonStyle: any = {};
      if (color == 'BLACK') {
        buttonStyle = {
          "background-color": color,
          "text": color,
          "color": "white"
        };
      } else {
        buttonStyle = {
          "background-color": color,
          "text": color,
        };
      }
      this.colorStyles.push(buttonStyle);
    })
  }

}
