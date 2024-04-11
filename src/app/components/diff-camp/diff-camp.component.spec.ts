import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffCampComponent } from './diff-camp.component';

describe('DiffCampComponent', () => {
  let component: DiffCampComponent;
  let fixture: ComponentFixture<DiffCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiffCampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiffCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
