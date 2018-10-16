import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';
import { LamparaPage } from '../lampara/lampara';
import { TvPage } from '../tv/tv';
import { SmartphonePage } from '../smartphone/smartphone';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bocina = BocinaPage; 
lampara = LamparaPage;
tv = TvPage;
smart = SmartphonePage;
  constructor(public navCtrl: NavController) {

  }
Clickbocina() {
  this.navCtrl.push(this.bocina);
}
Clicklampara() {
  this.navCtrl.push(this.lampara);
}
Clicktv() {
  this.navCtrl.push(this.tv);
}
Clicksmartphone() {
  this.navCtrl.push(this.smart);
}
}
