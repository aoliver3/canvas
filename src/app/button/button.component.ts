import { Component, OnInit, Input } from '@angular/core';
import { ColorSelectionService } from '../color-selection.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input('buttonColor') color: string;

  constructor(private colorSelectionService: ColorSelectionService) { }

  ngOnInit() {
  }

  private setColorSelection(color: string): void {
    this.colorSelectionService.selectedColor = color;
  }

}
