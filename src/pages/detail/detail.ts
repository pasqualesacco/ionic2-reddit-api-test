import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
Generated class for the Detail page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})
export class DetailPage {

    item: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        // If we navigated to this page, we will have an item available as a nav param
        this.item = navParams.get('item');
    }

    ionViewDidLoad() {
        //
    }

}
