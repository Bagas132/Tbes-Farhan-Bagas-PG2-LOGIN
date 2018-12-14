import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private authService : AuthService,
              private router : Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email    = form.value.email;
    const password = form.value.password;

    this.authService.login(email, password);
    this.router.navigate(['../']);  
  }

}
