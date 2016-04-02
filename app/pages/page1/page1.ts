import {Page, Alert, NavController} from 'ionic-angular';
import {NewFishCatchPage} from '../newfishcatch/newfishcatch';
import {FishCatchDetailPage} from '../fishcatchdetail/fishcatchdetail';


@Page({
  templateUrl: 'build/pages/page1/page1.html'
})
export class Page1 { 
  private items = [];
  constructor(private nav : NavController) {
    this.items = [{title: 'item1'}, {title: 'item2'},{title: 'item1'}, {title: 'item2'},{title: 'item1'}, {title: 'item2'},{title: 'item1'}, {title: 'item2'}
    ,{title: 'item1'}, {title: 'item2'},{title: 'item1'}, {title: 'item2'},{title: 'item1'}, {title: 'item2'},{title: 'item1'}, {title: 'item2'},{title: 'item1'}, {title: 'item2'}];
  }
  
  newFishCatch() {
     this.nav.push(NewFishCatchPage);
  }
  
  onFishCatchSelected(item){
     this.nav.push(FishCatchDetailPage);
  }
}
