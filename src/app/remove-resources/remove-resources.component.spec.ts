import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveResourcesComponent } from './remove-resources.component';

describe('RemoveResourcesComponent', () => {
  let component: RemoveResourcesComponent;
  let fixture: ComponentFixture<RemoveResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveResourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
