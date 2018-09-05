import { Component } from "@angular/core";
import { NavParams, NavController } from "ionic-angular";
import { UsersPage } from "../users";

@Component({
    selector: 'user-page',
    templateUrl: 'user.html'
})
export class UserPage {
    name: string;

    constructor(private param: NavParams, private navCtrl: NavController) {
        this.name = this.param.data['userName'];
    }

    onGoback() {
        // this.navCtrl.push(UsersPage);
        // this.navCtrl.pop();  //Go to last page
        this.navCtrl.popToRoot();
    }

}