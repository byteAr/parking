import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="bg-gradient-to-t from-black to-gray-700 min-h-screen">
      <app-header />
      <main id="main-content">
        <router-outlet />
      </main>
      <app-footer />
    </div>
  `
})
export class App {}
