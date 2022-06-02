import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingSpinningComponent } from './loading-spinning.component';

describe('LoadingSpinningComponent', () => {
  let component: LoadingSpinningComponent;
  let fixture: ComponentFixture<LoadingSpinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingSpinningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingSpinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
