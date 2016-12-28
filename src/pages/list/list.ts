import {Component} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
	selector: 'page-list',
	templateUrl: 'list.html'
})
export class List {

	items: any;

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {

		this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').
		map(res => res.json()).subscribe(data => {
        	this.items = data.data.children;
    	});
		
	}

	itemTapped(event, item) {
		// That's right, we're pushing to ourselves!

		this.navCtrl.push(DetailPage, {
			item: item
		});

		console.log(item);

	}

}
