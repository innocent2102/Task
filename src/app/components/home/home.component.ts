import { Component, OnInit } from '@angular/core';
import {DataHelper} from '../../helpers/DataHelper';
import {Router} from '@angular/router';
import {HomeService} from '../../services/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content = '';
  DataHelper = DataHelper;
  menuItems: any;
  //TODO: should provide interface
  notifications: any;
  notification = {type: 'info', message: 'This is info text', date: '2019-02-04'};
  notificationEnabled = true;
  timer: any;

  constructor(private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.menuItems = this.homeService.getMenuItems();
    this.notifications = this.homeService.getNotifications();
    this.enableNotification();
    // TODO: this probably trigger problem with page refreshing end redirecting
    this.router.navigateByUrl('/home/dashboard');
  }


  expandPanel(matExpansionPanel, item) {
    matExpansionPanel.expanded  = item.children.length > 0 &&  matExpansionPanel.expanded;
  }

  showLinkInfo(item, subItem) {
    if (item.children.length > 0 && DataHelper.hasValue(subItem)) {
      this.content = item.name + ' ' +  subItem.name;
    } else {
      this.content = item.name;
    }
  }

  getRandomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomNotification() {
    const notificationType = this.getRandomNumber(0, 3);
    this.notification = Object.assign({}, this.notifications[notificationType]);
  }

  enableNotification() {
    this.disableNotification();
    this.timer = setInterval(item => {
      this.getRandomNotification();
    }, this.getRandomNumber(1, 2) * 1000);

  }

  disableNotification() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  toggleNotifications() {
    this.notificationEnabled = !this.notificationEnabled;
      return this.notificationEnabled ? this.enableNotification() : this.disableNotification();
  }

}
