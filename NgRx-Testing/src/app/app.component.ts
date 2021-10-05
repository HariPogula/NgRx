import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { login } from './modules/auth/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'NgRx-Testing';

  constructor(private store: Store) {}
  ngOnInit(): void {
    const userProfile = localStorage.getItem('user');
    if (userProfile) {
      this.store.dispatch(login({ user: JSON.parse(userProfile) }));
    }
  }
}
