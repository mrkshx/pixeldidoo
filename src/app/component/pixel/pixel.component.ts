import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PixelDialogComponent } from '../pixel-dialog/pixel-dialog.component';


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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getRandomColor();
  }

  getRandomColor() {
    this.color = '#';
    for (let i = 0; i < 6; i++) {
      this.color += this.letters[Math.floor(Math.random() * 16)];
    }
  }

  openDialog() {
  this.dialog.open(PixelDialogComponent, {
    data: {
      colorString: this.color,
    }
  });
  }
}
