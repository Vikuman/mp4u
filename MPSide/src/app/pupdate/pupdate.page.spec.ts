import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupdatePage } from './pupdate.page';

describe('PupdatePage', () => {
  let component: PupdatePage;
  let fixture: ComponentFixture<PupdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupdatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
