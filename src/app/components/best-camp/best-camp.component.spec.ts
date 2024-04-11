import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestCampComponent } from './best-camp.component';

describe('BestCampComponent', () => {
  let component: BestCampComponent;
  let fixture: ComponentFixture<BestCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestCampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BestCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
