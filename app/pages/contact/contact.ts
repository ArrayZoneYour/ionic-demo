import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

	public user = {
		username : "",
		password : ""
	};

  	constructor(private navCtrl: NavController) {
  	}

  	login(){
  		console.log(this.user.username);
  		console.log(this.user.password);
  		
  		
  	}
}
