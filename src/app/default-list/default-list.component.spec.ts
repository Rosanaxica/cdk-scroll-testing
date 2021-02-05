import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultListComponent } from './default-list.component';

describe('DefaultListComponent', () => {
  let component: DefaultListComponent;
  let fixture: ComponentFixture<DefaultListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
