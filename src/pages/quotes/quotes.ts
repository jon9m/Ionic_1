import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { catagory: string, quotes: Quote[], icon: string };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private qoutesService: QuotesService) {
  }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  //ionViewDidLoad executed only after template was laoded, by that time quoteGroup may not be available
  ionViewDidLoad() {
    //this.quoteGroup = this.navParams.data;
    //use elvis operator (?) in html to check quoteGroup is available
    // {{quoteGroup?.catagory | uppercase}}
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [{
        text: 'Ok',
        handler: () => {
          this.qoutesService.addQuoteToFavorite(selectedQuote);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {

        }
      }]
    });

    alert.present();
  }

  onRemoveFromFavorites(selectedQuote: Quote) {
    return this.qoutesService.removeQuoteFromFavorite(selectedQuote);
  }

  isFavourite(selectedQuote: Quote) {
    return this.qoutesService.isQuoteFavorite(selectedQuote);
  }

}
