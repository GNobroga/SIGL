import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';
import { SharedModule } from '../../shared/shared.module';
import { Menu } from '../../store/models/menu.model';
import { AppState } from '../../store';

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
      routeLink: '/dashboard',
      label: 'Home',
    },
    {
      iconUrl: 'assets/icons/users.svg',
      routeLink: 'users',
      label: 'Entregadores',
    },
    {
      iconUrl: 'assets/icons/offers.svg',
      routeLink: '/users',
      label: 'Promoções',
    },
    {
      iconUrl: 'assets/icons/cart.svg',
      routeLink: '/dashboard/products',
      label: 'Produtos',
    },
    {
      iconUrl: 'assets/icons/chart.svg',
      routeLink: 'chart',
      label: 'Relatórios'
    }
  ];

  #store = inject<Store<AppState>>(Store);

  showMenu = toSignal(this.#store.select((state: AppState) => state.menu.show));

}
