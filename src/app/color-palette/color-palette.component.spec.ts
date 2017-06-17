import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPaletteComponent } from './color-palette.component';
import { ColorSelectionService } from '../color-selection.service';

describe('ColorPaletteComponent', () => {
  let component: ColorPaletteComponent;
  let fixture: ComponentFixture<ColorPaletteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ColorPaletteComponent
      ],
      providers: [
        ColorSelectionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
