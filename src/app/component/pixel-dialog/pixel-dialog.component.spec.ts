import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PixelDialogComponent } from './pixel-dialog.component';

describe('PixelDialogComponent', () => {
  let component: PixelDialogComponent;
  let fixture: ComponentFixture<PixelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PixelDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PixelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
