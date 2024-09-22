import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJDSComponent } from './add-jds.component';

describe('AddJDSComponent', () => {
  let component: AddJDSComponent;
  let fixture: ComponentFixture<AddJDSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddJDSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddJDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
