import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthRoutingModule } from './auth-routing.modules';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth.effects';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    PrimengModule,
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature('auth', fromAuth.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [],
})
export class AuthModule {
  // static forRoot(): ModuleWithProviders<AuthModule> {
  //   return {
  //     ngModule: AuthModule,
  //     providers: [AuthService, AuthGuard],
  //   };
  //}
}
