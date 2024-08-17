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
      this.router.navigate(['/todo']);

    }).catch((error) => {
      console.error('Login error:', error);

    });
  }

  async resetPressed() {
    if (this.email != "") {
      await this.authService.resetPassword(this.email)
     
      // TODO : Redirect to login page
      // TODO : Show a toast
      console.log("Reset email successfully sent")
    }
  }
}
