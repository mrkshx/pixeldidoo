import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pixel',
  templateUrl: './pixel.component.html',
  styleUrls: ['./pixel.component.scss']
})
export class PixelComponent implements OnInit {
  color = '#'
  borderColor = '#'
  letters = '0123456789ABCDEF';

  constructor() { }

  ngOnInit(): void {
   this.getRandomColor()
  }

  getRandomColor() {
        this.color = "#";
        for (let i = 0; i < 6; i++) {
          this.color += this.letters[Math.floor(Math.random() * 16)];
        }
      }

    
    }
