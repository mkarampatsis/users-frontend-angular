import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2NewComponent } from './step2-new-component';

describe('Step2NewComponent', () => {
  let component: Step2NewComponent;
  let fixture: ComponentFixture<Step2NewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step2NewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step2NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
