import {Page, Alert, NavController} from 'ionic-angular';
import {Fishcatch} from '../models/FishCatch';

@Page({
  templateUrl: 'build/pages/fishcatchdetail/fishcatchdetail.html'
})
export class FishCatchDetailPage {
  private  fishCatch : Fishcatch;
  constructor(private nav: NavController) {
      this.fishCatch = new Fishcatch(39.1283, -43.21 , 89, "This is a test", "Patoka Lake");
      console.log(JSON.stringify(this.fishCatch));
  }
  

}
