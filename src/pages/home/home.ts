import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BocinaPage } from '../bocina/bocina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
bocina = BocinaPage; 
  constructor(public navCtrl: NavController) {

  }
Clickbocina() {
  this.navCtrl.push(this.bocina);
}
}
