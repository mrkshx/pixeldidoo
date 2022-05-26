import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel',
  templateUrl: './pixel.component.html',
  styleUrls: ['./pixel.component.scss'],
})
export class PixelComponent implements OnInit {
  @Input() height = 0;
  color = '#';
  borderColor = '#';
  letters = '0123456789ABCDEF';

  overlayIsOpen = false;
  triggerOrigin: any;

  constructor() {}

  ngOnInit(): void {
    this.getRandomColor();
  }

  getRandomColor() {
    this.color = '#';
    for (let i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }

  toggleDialog(trigger: any) {
    this.triggerOrigin = trigger;
    this.overlayIsOpen = !this.overlayIsOpen;
  }
}
