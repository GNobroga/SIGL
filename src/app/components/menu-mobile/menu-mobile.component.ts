import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

  public opened = false;

  public toggle(): void {
    this.opened = !this.opened;
  }
}
