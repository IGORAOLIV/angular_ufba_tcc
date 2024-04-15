import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMiniComponent } from './products-mini.component';

describe('ProductsMiniComponent', () => {
  let component: ProductsMiniComponent;
  let fixture: ComponentFixture<ProductsMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsMiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductsMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
