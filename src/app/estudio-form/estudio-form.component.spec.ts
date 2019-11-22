import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudioFormComponent } from './estudio-form.component';

describe('EstudioFormComponent', () => {
  let component: EstudioFormComponent;
  let fixture: ComponentFixture<EstudioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
