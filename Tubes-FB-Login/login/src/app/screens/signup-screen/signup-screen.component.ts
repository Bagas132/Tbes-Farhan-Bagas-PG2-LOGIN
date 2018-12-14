import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth-service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-signup-screen',
  templateUrl: './signup-screen.component.html',
  styleUrls: ['./signup-screen.component.css']
})
export class SignupScreenComponent implements OnInit {

  constructor(private authService : AuthService,
              private notificationService : NotificationService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const email    = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password);
    this.notificationService.success('Sign Up Complete !');
    form.reset();
  }

}
