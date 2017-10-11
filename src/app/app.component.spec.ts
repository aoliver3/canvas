import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { CanvasComponent } from './canvas/canvas.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorSelectionService } from './color-selection.service';
import { TileComponent } from './tile/tile.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ButtonComponent,
        CanvasComponent,
        ColorPaletteComponent,
        TileComponent
      ],
      providers: [
        ColorSelectionService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  
});