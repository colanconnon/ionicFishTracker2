import {Page, Alert, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from '../service/login.service';
import 'rxjs/Rx';

@Page({
  templateUrl: 'build/pages/login/login.html',
  providers: [LoginService]
})
export class LoginPage {
  private username: string;
  private password: string;
 
   
  constructor(private nav: NavController, private loginService: LoginService) {
      
      
  }
  
  Login() {
    this.loginService.Login(this.username, this.password).subscribe(x => {
        console.log(x);
    });
    let alert = Alert.create({
      title: 'Alert',
      subTitle: 'Your login request has been recieved ' + this.username,
      buttons: ['OK']
    });
    this.nav.present(alert);
    this.nav.push(TabsPage);

  }
}
