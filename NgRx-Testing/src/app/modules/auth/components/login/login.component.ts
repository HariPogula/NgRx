import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { AuthService } from '../../services/auth.service';
import { tap } from 'rxjs/operators';
import { login } from '../../auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>, //Global State(Reducer )
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  login() {
    const result = this.loginForm.value;
    console.log('Result is ' + JSON.stringify(result));

    this.store.dispatch(login({ user: result.username }));
    this.router.navigate(['/course']);
    // this.authService.login(result).pipe(
    //   tap((u) => {
    //     console.log('Tap User is ' + u);

    //   })
    // );
  }
}
