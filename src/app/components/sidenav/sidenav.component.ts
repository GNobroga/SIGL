import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface SidenavMenu {
  iconUrl: string;
  routeLink: string;
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  menus: SidenavMenu[] = [
    {
      iconUrl: 'assets/icons/home.svg',
      routeLink: '/home',
    },
    {
      iconUrl: 'assets/icons/users.svg',
      routeLink: '/users',
    },
    {
      iconUrl: 'assets/icons/offers.svg',
      routeLink: '/users',
    },
    {
      iconUrl: 'assets/icons/cart.svg',
      routeLink: '/cart',
    },
    {
      iconUrl: 'assets/icons/chart.svg',
      routeLink: '/chart',
    }
  ];
}
