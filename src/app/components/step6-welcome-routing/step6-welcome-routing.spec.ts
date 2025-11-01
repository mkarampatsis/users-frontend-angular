import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step6WelcomeRouting } from './step6-welcome-routing';

describe('Step6WelcomeRouting', () => {
  let component: Step6WelcomeRouting;
  let fixture: ComponentFixture<Step6WelcomeRouting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step6WelcomeRouting]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step6WelcomeRouting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
