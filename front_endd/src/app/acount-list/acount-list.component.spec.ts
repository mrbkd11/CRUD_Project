import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountListComponent } from './acount-list.component';

describe('AcountListComponent', () => {
  let component: AcountListComponent;
  let fixture: ComponentFixture<AcountListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcountListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
