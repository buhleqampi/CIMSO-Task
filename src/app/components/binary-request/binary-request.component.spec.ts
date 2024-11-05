import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryRequestComponent } from './binary-request.component';

describe('BinaryRequestComponent', () => {
  let component: BinaryRequestComponent;
  let fixture: ComponentFixture<BinaryRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BinaryRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BinaryRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
