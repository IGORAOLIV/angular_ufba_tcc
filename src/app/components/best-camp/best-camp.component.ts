import { Component } from '@angular/core';
import { BestItemComponent } from '../best-item/best-item.component';

@Component({
  selector: 'app-best-camp',
  standalone: true,
  imports: [BestItemComponent],
  templateUrl: './best-camp.component.html',
  styleUrl: './best-camp.component.css',
})
export class BestCampComponent {}
