import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurmanComponent } from './furman.component';

describe('FurmanComponent', () => {
  let component: FurmanComponent;
  let fixture: ComponentFixture<FurmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
