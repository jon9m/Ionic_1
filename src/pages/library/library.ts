import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  quoteCollection: { catagory: string, quotes: Quote[], icon: string }[];
  quotesPage = QuotesPage;

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }

}
