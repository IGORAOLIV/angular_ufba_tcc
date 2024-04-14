import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdItemPageComponent } from './prod-item-page.component';

describe('ProdItemPageComponent', () => {
  let component: ProdItemPageComponent;
  let fixture: ComponentFixture<ProdItemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdItemPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProdItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
