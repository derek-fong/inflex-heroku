import { Component, OnInit } from '@angular/core';
import { MeteorObservable } from 'meteor-rxjs';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'ix-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ix works!';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getToken().subscribe((token: string) => {
      console.log(token);
    });
  }
}
