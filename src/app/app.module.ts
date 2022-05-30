import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PixelComponent } from './component/pixel/pixel.component';
import { PixelContainerComponent } from './component/pixel-container/pixel-container.component';
import { PixelDialogComponent } from './component/pixel-dialog/pixel-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    PixelComponent,
    PixelContainerComponent,
    PixelDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ClipboardModule,
    OverlayModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
