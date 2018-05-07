import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent implements OnInit {

  private pattern: RegExp = new RegExp('^[0-9]{0,2}?$'); // includes numbers 0-9 with string length 0-2
  private startingValue = 1; // value on initialize of component
  private max: Number = 99; // maximum value of the input
  private min: Number = 1; // minimum value of the input
  private lastValidValue: number = this.startingValue; // last valid value that mathched the regex pattern
  private currentValue: number = this.startingValue; // value being displayed in the UI

  constructor(private chgDeRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  // remove invalid keystokes from input filed
  private removeInvalidInputs(incomingValue: string): void {
    // if the incoming value does not match the regex pattern
    if (!this.pattern.test(incomingValue)) {
      // tell the app we are making a change in the code that needs to be refelcted in the UI
      this.chgDeRef.detectChanges();
      // reset the value to the last valid value
      this.currentValue = this.lastValidValue;
    } else {
      // convert incoming value into a number and set current value to result

      // OPTION 1 //
      // ternary allows an empty string as a vaild value, w/o replacing w/a 0
      // this.currentValue = parseFloat(incomingValue) ? parseFloat(incomingValue) : '';

      // OPTION 2 //
      // Number puts a 0 for an empty string but replaces it with the next valid value
      this.currentValue = Number(incomingValue);

      // set the last valid value to our current value
      this.lastValidValue = this.currentValue;
    };
  }

  // add 1 if possible
  private plus(): void {
    if (this.validateNewQuantity(this.currentValue + 1)) {
      this.currentValue++;
      this.lastValidValue = this.currentValue;
    }
  }

  // subtract 1 if possible
  private minus(): void {
    if (this.validateNewQuantity(this.currentValue - 1)) {
      this.currentValue--;
      this.lastValidValue = this.currentValue;
    }
  }

  // checks for max & min thresholds
  private validateNewQuantity(num: number): boolean {
    return (num <= this.max && num >= this.min);
  }

}
