import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-container',
  templateUrl: './pixel-container.component.html',
  styleUrls: ['./pixel-container.component.scss']
})
export class PixelContainerComponent implements OnInit {
  windowHeight: number = 0;
  windowWidth: number = 0;
  PixelNumber: number = 0;
  PixelNumberArray:  number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getResolution();
    this.calculatePixelNumber();
  }

  getResolution(): void {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }

  calculatePixelNumber(): void {
    if (this.windowHeight > 0 && this.windowWidth > 0) {
      this.PixelNumber = (this.windowWidth * this.windowHeight) / (55 * 55);
      this.PixelNumber = Math.round(this.PixelNumber);

      for (let i = 1;  i <= this.PixelNumber;i++) {
        this.PixelNumberArray.push(i)
      }
    }
  }
}
