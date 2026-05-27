import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav aria-label="Navegación principal"
      class="bg-gradient-to-t from-black to-gray-700 border-gray-200 pt-2 pb-2">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#inicio" class="flex items-center space-x-3" aria-label="Cocheras Gustavo — Ir al inicio">
          <picture>
            <source srcset="assets/icons/header/cochera-white.webp" type="image/webp">
            <img id="inicio" class="w-28 md:w-48" src="assets/icons/header/cochera-white.png"
              alt="Cocheras Gustavo — Estacionamiento Aeropuerto Ezeiza" width="400" height="400"
              fetchpriority="high">
          </picture>
        </a>
        <button type="button" (click)="toggleMenu()"
          [attr.aria-expanded]="menuOpen()"
          aria-controls="navbar-dropdown" aria-label="Abrir menú de navegación"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
          <span class="sr-only">Abrir menú principal</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div [class.hidden]="!menuOpen()" class="w-full md:block md:w-auto" id="navbar-dropdown">
          <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
            @for (item of navItems; track item.href) {
              <li (click)="closeMenu()" class="flex justify-start pl-5 md:justify-center md:pl-1 items-center">
                <img class="h-6 mr-2" [src]="'assets/icons/header/' + item.icon" alt="" aria-hidden="true" width="24" height="24">
                <a [href]="item.href" class="block py-2 px-3 text-white rounded md:bg-transparent md:p-0">{{ item.label }}</a>
              </li>
            }
          </ul>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  menuOpen = signal(false);

  navItems = [
    { href: '#inicio', icon: 'home.svg', label: 'Inicio' },
    { href: '#servicios', icon: 'services.svg', label: 'Servicios' },
    { href: '#galeria', icon: 'galery.svg', label: 'Galería' },
    { href: '#opiniones', icon: 'opiniones.svg', label: 'Opiniones' },
    { href: '#ubicacion', icon: 'location.svg', label: 'Ubicación' },
    { href: '#contacto', icon: 'whatsapp.svg', label: 'Contacto' },
  ];

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }
}
