import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirlasoftChennaiComponent } from './birlasoft-chennai.component';

describe('BirlasoftChennaiComponent', () => {
  let component: BirlasoftChennaiComponent;
  let fixture: ComponentFixture<BirlasoftChennaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirlasoftChennaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirlasoftChennaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
