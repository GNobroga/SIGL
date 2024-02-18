import { Component, DoCheck, computed, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { AppState } from '../../store';
import { toggleMenu } from '../../store/actions';

@Component({
  selector: 'app-menu-mobile',
  standalone: true,
  imports: [],
  templateUrl: './menu-mobile.component.html',
  styleUrl: './menu-mobile.component.scss'
})
export class MenuMobileComponent implements DoCheck {
  #store: Store<AppState> = inject(Store);

  open = toSignal(this.#store.select(state => state.global.menu.showMenu));

  public opened = computed(() => this.open());

  public ngDoCheck() {
    console.log(this.open());
  }


  public toggle(): void {
    this.#store.dispatch(toggleMenu());
  }
}
