import {Page, Alert, NavController} from 'ionic-angular';
import {Geolocation} from 'ionic-native';


@Page({
  templateUrl: 'build/pages/newfishcatch/newfishcatch.html'
})
export class NewFishCatchPage {
   
  constructor(private nav: NavController) {
    Geolocation.getCurrentPosition().then((resp) => {
    console.log(resp.coords);
    //resp.coords.longitude
    })
      
  }

}
