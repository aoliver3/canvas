import { Component, OnInit } from '@angular/core';
import { Colors } from './colors';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.css']
})
export class ColorPaletteComponent implements OnInit {

  private buttonStyles: Array<any> = [];

  constructor(private colors: Colors) { }

  ngOnInit() {
    this.createButtonStyles();
  }

  private createButtonStyles(): void {
    const colorChoices: Array<string> = this.colors.getColors();

    colorChoices.forEach((color: string) => {
      const buttonStyle = {
        'background-color': color,
        'text': color,
        'color': color === 'BLACK' ? 'white' : 'black'
      };

      this.buttonStyles.push(buttonStyle);
    });
  }

}
