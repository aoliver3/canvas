import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TileComponent } from  './tile/tile.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { ColorSelectionService } from './color-selection.service';
import { CanvasComponent } from './canvas/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    ColorPaletteComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ColorSelectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
