import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.modules';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', fromAuth.reducers),
  ],
})
export class AuthModule {}
