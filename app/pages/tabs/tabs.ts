import {Component} from '@angular/core';
import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';

@Component({
  template: `<ion-tabs>
  <ion-tab [root]="tab1Root" tabTitle="主页" tabIcon="home"></ion-tab>
  <ion-tab [root]="tab2Root" tabTitle="Talk" tabIcon="information-circle"></ion-tab>
  <ion-tab [root]="tab3Root" tabTitle="我的" tabIcon="person"></ion-tab>
</ion-tabs>`
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {

    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
    this.tab3Root = ContactPage;
  }
}