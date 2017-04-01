import { Injectable } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService {

  getToken(): Observable<string> {
    return MeteorObservable.call('auth:getToken');
  }
}
