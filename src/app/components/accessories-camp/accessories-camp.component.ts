import { Component } from '@angular/core';
import { AccessoriesItemComponent } from '../accessories-item/accessories-item.component';

@Component({
  selector: 'app-accessories-camp',
  standalone: true,
  imports: [AccessoriesItemComponent],
  templateUrl: './accessories-camp.component.html',
  styleUrl: './accessories-camp.component.css',
})
export class AccessoriesCampComponent {}
