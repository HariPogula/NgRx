import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _url = 'http://localhost:3000/';
  constructor(private http: HttpClient) {}
  login(user): Observable<any> {
    const user$ = this.http.get(this._url + 'users').pipe(
      map((u: any) => {
        u.json();
        console.log('User SErvice is ' + JSON.stringify(user$));
      })
    );

    return user$;
    // .pipe(filter((u) => u[0].username == user.username));
    //  console.log('User Service Vaue is ' + JSON.stringify(user$).value);
  }
}
