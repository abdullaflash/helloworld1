import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirlasoftNoidaComponent } from './birlasoft-noida.component';

describe('BirlasoftNoidaComponent', () => {
  let component: BirlasoftNoidaComponent;
  let fixture: ComponentFixture<BirlasoftNoidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirlasoftNoidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirlasoftNoidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
