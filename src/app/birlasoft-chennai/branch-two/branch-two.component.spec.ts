import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchTwoComponent } from './branch-two.component';

describe('BranchTwoComponent', () => {
  let component: BranchTwoComponent;
  let fixture: ComponentFixture<BranchTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
