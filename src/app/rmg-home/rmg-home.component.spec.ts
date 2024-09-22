import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RmgHomeComponent } from './rmg-home.component';

describe('RmgHomeComponent', () => {
  let component: RmgHomeComponent;
  let fixture: ComponentFixture<RmgHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RmgHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RmgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
