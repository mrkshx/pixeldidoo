import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-dialog',
  templateUrl: './pixel-dialog.component.html',
  styleUrls: ['./pixel-dialog.component.scss'],
})
export class PixelDialogComponent implements OnInit {
  @Input() colorString: string = '';

  rgbColor = {
    red: 0,
    green: 0,
    blue: 0,
  };

  rgbColorString = '';

  constructor() {}

  ngOnInit(): void {
    this.convertColorToRGB();
  }

  convertColorToRGB(): void {
    this.rgbColor.red = parseInt(this.colorString.substring(1, 3), 16);
    this.rgbColor.green = parseInt(this.colorString.substring(3, 5), 16);
    this.rgbColor.blue = parseInt(this.colorString.substring(5), 16);
    this.rgbColorString = `rgb(${this.rgbColor.red},${this.rgbColor.green},${this.rgbColor.blue})`;
  }
}
