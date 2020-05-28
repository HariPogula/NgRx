import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.modules';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    PrimengModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),
  ],
  providers: [],
})
export class AuthModule {}
