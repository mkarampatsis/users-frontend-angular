import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step14GoogleLogin } from './step14-google-login';

describe('Step14GoogleLogin', () => {
  let component: Step14GoogleLogin;
  let fixture: ComponentFixture<Step14GoogleLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step14GoogleLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step14GoogleLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
