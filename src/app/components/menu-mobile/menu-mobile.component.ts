import { Component, DoCheck, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { toggle } from '../../store/actions/menu.actions';
import { AppState } from '../../store';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent implements DoCheck {
  #store = inject<Store<AppState>>(Store);

  open = toSignal(this.#store.select(state => state.menu.show));

  public opened = computed(() => this.open());

  public ngDoCheck() {
    console.log(this.open());
  }

  public toggle(): void {
    this.#store.dispatch(toggle());
  }
}
