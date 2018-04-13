import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchOneComponent } from './branch-one.component';

describe('BranchOneComponent', () => {
  let component: BranchOneComponent;
  let fixture: ComponentFixture<BranchOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
