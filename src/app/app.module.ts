import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PixelComponent } from './component/pixel/pixel.component';
import { PixelContainerComponent } from './component/pixel-container/pixel-container.component';
import { PixelDialogComponent } from './component/pixel-dialog/pixel-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PixelComponent,
    PixelContainerComponent,
    PixelDialogComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
