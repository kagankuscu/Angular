import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName;
  password;
  constructor(private authService: AuthService, private route:Router) {}

  ngOnInit() {}

  login(formValues) {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.route.navigate(['/events']);
  }

  cancel() {
    this.route.navigate(['/events']);
  }
}
