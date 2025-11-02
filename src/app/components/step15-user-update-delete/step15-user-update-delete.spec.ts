import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Step15UserUpdateDelete } from './step15-user-update-delete';

describe('Step15UserUpdateDelete', () => {
  let component: Step15UserUpdateDelete;
  let fixture: ComponentFixture<Step15UserUpdateDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step15UserUpdateDelete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Step15UserUpdateDelete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
