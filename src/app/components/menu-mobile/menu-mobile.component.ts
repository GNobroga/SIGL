import { Component, DoCheck, EventEmitter, OnInit, computed, effect, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { toggleMenu } from '../../store';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent {

  #store = inject(Store);

  open = toSignal(this.#store.select<{ showMenu: boolean }>(state => state.store));

  public opened = computed(() => this.open()?.showMenu);


  public toggle(): void {
    this.#store.dispatch(toggleMenu());
  }
}
