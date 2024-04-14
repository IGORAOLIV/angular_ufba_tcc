import { Component, NgModule } from '@angular/core';
import {
  Router,
  RouterModule,
  RouterOutlet,
  Event as RouterEvent,
  NavigationEnd,
} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { routes } from './app.routes';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  showHomeComponent = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter(
          (event: RouterEvent): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.showHomeComponent = event.urlAfterRedirects === '/home';
      });
  }
  title = 'angular_ufba_tcc';
}
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
