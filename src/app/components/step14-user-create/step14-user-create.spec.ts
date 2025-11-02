import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step14UserCreate } from './step14-user-create';

describe('Step14UserCreate', () => {
  let component: Step14UserCreate;
  let fixture: ComponentFixture<Step14UserCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step14UserCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step14UserCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
