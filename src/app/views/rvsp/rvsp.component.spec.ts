import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RvspComponent } from './rvsp.component';

describe('RvspComponent', () => {
  let component: RvspComponent;
  let fixture: ComponentFixture<RvspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RvspComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RvspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
