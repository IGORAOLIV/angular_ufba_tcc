import { Component } from '@angular/core';
import { BestCampComponent } from '../best-camp/best-camp.component';
import { DiffCampComponent } from '../diff-camp/diff-camp.component';
import { IntroComponent } from '../intro/intro.component';
import { AccessoriesCampComponent } from '../accessories-camp/accessories-camp.component';
import { TestimonyComponent } from '../testimony/testimony.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    IntroComponent,
    BestCampComponent,
    DiffCampComponent,
    AccessoriesCampComponent,
    TestimonyComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
