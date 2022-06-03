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
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SuperheaderComponent } from './component/superheader/superheader.component';

@NgModule({
  declarations: [
    AppComponent,
    PixelComponent,
    PixelContainerComponent,
    PixelDialogComponent,
    SuperheaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ClipboardModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
