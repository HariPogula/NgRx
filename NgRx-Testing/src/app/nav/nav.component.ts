import { Component, OnInit } from '@angular/core';
import { AppState } from '../reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isLoggedIn, isLoggedOut } from '../modules/auth/auth.selectors';
import { logout, login } from '../modules/auth/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    // !! is used if the expression has value, it should be true otherwise false.
    // ! is to give opppisite value of expression.

    // this.isLoggedIn$ = this.store.pipe(map((state) => !!state['auth']?.user));
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.select(isLoggedOut);
    // this.isLoggedOut$ = this.store.pipe(map((state) => !state['auth']?.user));
  }

  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/auth']);
  }
}
