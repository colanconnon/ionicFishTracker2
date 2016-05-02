import {Page, Alert, NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {LoginService} from '../service/login.service';
import 'rxjs/Rx';
import {LocalNotifications} from 'ionic-native';


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
        if(x.token){
            LocalNotifications.schedule({
            id: 1,
            text: "TEST",
            data: { secret: "232323" }
        });
            this.nav.push(TabsPage);
        }
        else {
            let alert = Alert.create({
                title: 'Alert',
                subTitle: 'Invalid Login information, please try again',
                buttons: ['OK']
            });
            this.nav.present(alert);
        }
    });
   

  }
}
