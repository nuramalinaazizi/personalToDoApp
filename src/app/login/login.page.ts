import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthService, private navCtrl: NavController, private route: ActivatedRoute, private router: Router) { }

  email: string = "";
  password: string = "";
  ngOnInit() {
  }

  login() {
    this.authService.signIn(this.email, this.password).then((userCredential) => {
      console.log('User logged in:', userCredential);
      this.router.navigate(['/home']);

    }).catch((error) => {
      console.error('Login error:', error);

    });
  }


}
