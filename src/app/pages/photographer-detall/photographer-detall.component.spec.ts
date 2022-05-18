import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographerDetallComponent } from './photographer-detall.component';

describe('PhotographerDetallComponent', () => {
  let component: PhotographerDetallComponent;
  let fixture: ComponentFixture<PhotographerDetallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotographerDetallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographerDetallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
