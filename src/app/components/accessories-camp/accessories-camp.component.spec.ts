import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesCampComponent } from './accessories-camp.component';

describe('AccessoriesCampComponent', () => {
  let component: AccessoriesCampComponent;
  let fixture: ComponentFixture<AccessoriesCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesCampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
