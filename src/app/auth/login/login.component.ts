import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this.authService.login(email, password);
  }

}
