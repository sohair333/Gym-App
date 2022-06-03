import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderCarsoulComponent } from './slider-carsoul.component';

describe('SliderCarsoulComponent', () => {
  let component: SliderCarsoulComponent;
  let fixture: ComponentFixture<SliderCarsoulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderCarsoulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderCarsoulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
