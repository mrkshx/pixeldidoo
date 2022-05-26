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

  hslColor = {
    h: 0.0,
    s: 0.0,
    l: 0.0,
  };

  hslColorString = '';

  constructor() {}

  ngOnInit(): void {
    this.convertColorToRGB();
    this.convertRGBToHSL();
  }

  convertColorToRGB(): void {
    this.rgbColor.red = parseInt(this.colorString.substring(1, 3), 16);
    this.rgbColor.green = parseInt(this.colorString.substring(3, 5), 16);
    this.rgbColor.blue = parseInt(this.colorString.substring(5), 16);
    this.rgbColorString = `rgb(${this.rgbColor.red},${this.rgbColor.green},${this.rgbColor.blue})`;
  }

  convertRGBToHSL(): void {
    const r = this.rgbColor.red / 255;
    const g = this.rgbColor.green / 255;
    const b = this.rgbColor.blue / 255;
    let min, max, delta;
    min = Math.min(r, g, b);
    max = Math.max(r, g, b);

    this.hslColor.l = (max + min) / 2;
    this.hslColor.l *= 100;
    this.hslColor.l = Math.round(this.hslColor.l * 10) / 10;

    if (max === min) {
      this.hslColor.h = this.hslColor.s = 0;
    } else {
      delta = max - min;
      this.hslColor.s =
        this.hslColor.l > 50 ? delta / (2.0 - max - min) : delta / (max + min);
      this.hslColor.s *= 100;
      this.hslColor.s = Math.round(this.hslColor.s * 10) / 10;

      if (r === max) {
        this.hslColor.h = (g - b) / delta;
      } else if (g === max) {
        this.hslColor.h = 2 + (b - r) / delta;
      } else {
        this.hslColor.h = 4 + (r - g) / delta;
      }

      this.hslColor.h *= 60;

      if (this.hslColor.h < 0) {
        this.hslColor.h += 360;
      }

      this.hslColor.h = Math.round(this.hslColor.h);
    }

    this.hslColorString = `hsl(${this.hslColor.h}, ${this.hslColor.s}%, ${this.hslColor.l}%)`;
  }
}
