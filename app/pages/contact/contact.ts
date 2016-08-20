import {Component} from '@angular/core';
import {NavController,LoadingController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

	public user = {
		username : "",
		password : ""
	};

  	constructor(private navCtrl: NavController,private loadingController: LoadingController) {
  	}

  	login(){
  		console.log(this.user.username);
  		console.log(this.user.password);
  		let loader = this.loadingController.create({
        content : "登录中...",
        duration : 3000
      });
  		loader.present();
  	}
}
