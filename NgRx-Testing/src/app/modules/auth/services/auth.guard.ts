import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { isLoggedIn } from '../auth.selectors';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(
        isLoggedIn,
        tap((loggedIn) => {
          if (!loggedIn) {
            this.router.navigate(['/auth']);
          }
        })
      )
    );
  }
}
