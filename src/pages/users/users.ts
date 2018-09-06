import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  constructor(public navCtrl: NavController) {
  }

  ionViewCanEnter(): boolean | Promise<boolean> {
    console.log('1 - ionViewCanEnter UsersPage');
    return true; //false - access denied
  }

  ionViewDidLoad() {
    console.log('2 - ionViewDidLoad UsersPage');
  }

  ionViewWillEnter() {
    console.log('3 - ionViewWillEnter UsersPage');
  }

  ionViewDidEnter() {
    console.log('4 - ionViewDidEnter UsersPage');
  }

  ionViewCanLeave(): boolean | Promise<boolean> {
    console.log('5 - ionViewCanLeave UsersPage');

    const promise = new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
    return promise;
  }

  ionViewWillLeave() {
    console.log('6 - ionViewWillLeave UsersPage');
  }

  ionViewDidLeave() {
    console.log('7 - ionViewDidLeave UsersPage');
  }

  ionViewWillUnload() {
    console.log('8 - ionViewWillUnload UsersPage');
  }
  
  onLoadUser(name: string) {
    this.navCtrl.push(UserPage, { userName: name }, {
      direction: 'back', // default for push is 'forward'
      duration: 500, // 2 seconds
      easing: 'ease-in'
    });
  }

}
