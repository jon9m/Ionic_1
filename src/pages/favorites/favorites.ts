import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { QuotePage } from '../quote/quote';
import { SettingService } from '../../services/settings/setting-service';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private quotesService: QuotesService,
    private modalController: ModalController,
    private settingService: SettingService) {
  }

  //Always executed even if page is cached
  ionViewWillEnter() {
    this.quotes = this.quotesService.getFavoriteQuotes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritesPage');
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalController.create(QuotePage, quote);
    modal.present();

    modal.onDidDismiss((isUnfavorite) => {
      if (isUnfavorite) {
        this.removeFromFavorites(quote);
      }
    });
  }

  removeFromFavorites(quote: Quote) {
    //This will not reload the underlying page as modal is just an overlay
    this.quotesService.removeQuoteFromFavorite(quote);

    //To reload the list
    // this.quotes = this.quotesService.getFavoriteQuotes();
    //or - remove the item from the local list
    const position = this.quotes.findIndex((quoteEl) => {
      if (quoteEl.id === quote.id) {
        return true;
      }
    });
    this.quotes.splice(position, 1);
  }

  deleteOnSlide(quote: Quote) {
    this.removeFromFavorites(quote);
  }

  getBackground() {
    return this.settingService.isAltbackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

}
