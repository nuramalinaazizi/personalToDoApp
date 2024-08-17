import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private authService: AuthService) { }

  email: string = "";
  password: string = "";
  name: string = "";

  ngOnInit() {
  }

  async register() {
    if (this.email && this.password && this.name) {
      try {
        await this.authService.register(this.email, this.password, this.name);
        console.log("Registration successful")
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  }


}
