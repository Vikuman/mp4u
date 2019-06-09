import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMPPage } from './my-mp.page';

describe('MyMPPage', () => {
  let component: MyMPPage;
  let fixture: ComponentFixture<MyMPPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMPPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMPPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
