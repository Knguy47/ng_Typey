import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDisplayerComponent } from './app-displayer.component';

describe('AppDisplayerComponent', () => {
  let component: AppDisplayerComponent;
  let fixture: ComponentFixture<AppDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
