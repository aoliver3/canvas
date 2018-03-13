import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private chgDeRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  ////////////// input testing ///////////////
  private pattern: RegExp = new RegExp('^[0-9]{0,2}?$'); // numbers 0-9 with length 0-2
  private lastValidValue: number;
  private currentValue: number = 1; // value on start

  private removeInvalidInputs(incomingValue: string): void {
    if (!this.pattern.test(incomingValue)) {
      // resets the value to the last valid value
      this.chgDeRef.detectChanges();
      this.currentValue = this.lastValidValue;
    } else {
      // ternary allows empty string as vaild value,
      // this.currentValue = parseFloat(incomingValue) ? parseFloat(incomingValue) : '';
      
      // Number puts a 0 for an empty string but replaces it with the next valid value
      this.currentValue = Number(incomingValue);
      this.lastValidValue = this.currentValue;
    };
  }

  private plus(): void {
    if (this.validateNewQuantity(this.currentValue + 1)) {
      this.currentValue++;
      this.lastValidValue = this.currentValue;
    }
  }

  private minus(): void {
    if (this.validateNewQuantity(this.currentValue - 1)) {
      this.currentValue--;
      this.lastValidValue = this.currentValue;
    }
  }

  // checks for max & min thresholds
  private validateNewQuantity(num: number): boolean {
    return (num <= 99 && num >= 1);
  }

}
