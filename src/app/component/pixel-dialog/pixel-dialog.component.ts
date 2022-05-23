import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel-dialog',
  templateUrl: './pixel-dialog.component.html',
  styleUrls: ['./pixel-dialog.component.scss']
})
export class PixelDialogComponent implements OnInit {
  @Input() color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
