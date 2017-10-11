import { Component, OnInit, Input } from '@angular/core';
import { ColorSelectionService } from '../color-selection.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('buttonColorFromPalette') colorChoice: string;

  private buttonStyle = { };

  constructor(private colorSelectionService: ColorSelectionService) { }

  ngOnInit() {
  }

  private setColorSelection(color: string): void {
    this.colorSelectionService.selectedColor = color;
    this.setButtonStyle();
  }

  private setButtonStyle(): void {
    if (this.colorChoice == "BLACK") {
      this.buttonStyle = {
        "background-color": this.colorChoice,
        "color": "white"
      }
    } else {
      this.buttonStyle = {
        "background-color": this.colorChoice,
      }
    }
  }

}