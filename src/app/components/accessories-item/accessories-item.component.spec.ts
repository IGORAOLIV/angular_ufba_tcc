import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesItemComponent } from './accessories-item.component';

describe('AccessoriesItemComponent', () => {
  let component: AccessoriesItemComponent;
  let fixture: ComponentFixture<AccessoriesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
