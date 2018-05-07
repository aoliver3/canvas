import { Injectable } from '@angular/core';

@Injectable()
export class Colors {
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

    foo: any;

    getColors(): Array<string> {
        return this.colorChoices;
    }
};