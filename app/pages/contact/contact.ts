import {Component} from '@angular/core';
import {NavController,LoadingController} from 'ionic-angular';
import {Http} from '@angular/http';

@Component({
  templateUrl: 'build/pages/contact/contact.html'
})
export class ContactPage {

	public user = {
		username : "",
		password : ""
	};

  	constructor(private navCtrl: NavController,private loadingController: LoadingController,private HTTP: Http) {
  	}

  	login(){
  		console.log(this.user.username);
  		console.log(this.user.password);
  		let loader = this.loadingController.create({
        content : "登录中...",
        duration : 3000
      });
      this.HTTP.get("http://hust.com/TP_END/Student/Index/APPLogin?student_number="+this.user.username+"&password="+this.user.password).subscribe(data=>{
        console.log(data);
      })
  		loader.present();
  	}
}
