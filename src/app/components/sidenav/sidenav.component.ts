import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';
import { AppState } from '../../store';

interface SidenavMenu {
  iconUrl: string;
  routeLink: string;
  label: string;
  iconStyles?: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink, NgIf, MenuMobileComponent, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  menus: SidenavMenu[] = [
    {
      iconUrl: 'assets/icons/home.svg',
      routeLink: '/dashboard',
      label: 'Home',
    },
    {
      iconUrl: 'assets/icons/users.svg',
      routeLink: '/dashboard/drivers',
      label: 'Entregadores',
    },
    {
      iconUrl: 'assets/icons/offers.svg',
      routeLink: '/dashboard/users',
      label: 'Promoções',
    },
    {
      iconUrl: 'assets/icons/pedidos.svg',
      routeLink: '/dashboard/orders',
      label: 'Pedidos',
      iconStyles: 'filter: invert(1);',
    },
    {
      iconUrl: 'assets/icons/cart.svg',
      routeLink: '/dashboard/products',
      label: 'Produtos',
    },
    {
      iconUrl: 'assets/icons/chart.svg',
      routeLink: '/dashboard/chart',
      label: 'Relatórios'
    }
  ];

  #store = inject<Store<AppState>>(Store);

  showMenu = toSignal(this.#store.select((state: AppState) => state.menu.show));

}
