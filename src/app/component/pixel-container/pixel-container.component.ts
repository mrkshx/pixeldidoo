import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-container',
  templateUrl: './pixel-container.component.html',
  styleUrls: ['./pixel-container.component.scss']
})
export class PixelContainerComponent implements OnInit {
  windowHeight: number = 0;
  windowWidth: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getResolution();
  }

  getResolution(): void {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
}
