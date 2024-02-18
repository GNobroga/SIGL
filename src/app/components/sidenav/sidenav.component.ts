import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';

interface SidenavMenu {
  iconUrl: string;
  routeLink: string;
  label: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, NgIf, MenuMobileComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  menus: SidenavMenu[] = [
    {
      iconUrl: 'assets/icons/home.svg',
      routeLink: '/home',
      label: 'Home',
    },
    {
      iconUrl: 'assets/icons/users.svg',
      routeLink: '/users',
      label: 'Fornecedores',
    },
    {
      iconUrl: 'assets/icons/offers.svg',
      routeLink: '/users',
      label: 'Promoções',
    },
    {
      iconUrl: 'assets/icons/cart.svg',
      routeLink: '/cart',
      label: 'Produtos',
    },
    {
      iconUrl: 'assets/icons/chart.svg',
      routeLink: '/chart',
      label: 'Relatórios'
    }
  ];

  #store: Store<AppState> = inject(Store<AppState>);

  showMenu = toSignal(this.#store.select(state => state.global.menu.showMenu));
}
