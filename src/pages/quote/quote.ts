import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ViewContainerData } from '@angular/core/src/view';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private viewController: ViewController) {
    //viewController - controls currently active page
  }

  onClose(isUnfavorite = false) {
    this.viewController.dismiss(isUnfavorite);
  }

  ionViewDidLoad() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
  }

}
