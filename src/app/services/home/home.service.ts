import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs';;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  menuItems = [{
    name: 'Dashboard',
    children: []
  }, {
    name: 'Statistics',
    children: [{
      name: 'Tests'},  {
      name: 'Devices'},
      {name: 'Builds'},
      {name: 'Services'},
      {name: 'Projects'},
    ]}, {
    name: 'Reports',
    children: [
      {name: 'Tests'},
      {name: 'Devices'},
      {name: 'Builds'},
      {name: 'Services'},
      {name: 'Projects'},
    ]}, {
    name: 'Configurations',
    children: []
  },{
    name: 'Overview',
    children: [
      {name: 'Tests'},
      {name: 'Devices'},
      {name: 'Builds'},
      {name: 'Services'},
      {name: 'Projects'},
    ]},
  ];

  notifications = [
    {id: 0, type: 'error', message: 'This is error message', date: '2019-01-01', show: true},
    {id: 1, type: 'warning', message: 'This is warning message', date: '2019-01-02', show: true},
    {id: 2, type: 'info', message: 'This is info message', date: '2019-01-03', show: true
  }];

  private content = new BehaviorSubject<string>('');
  currentContent = this.content.asObservable();

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }

  getNotifications() {
    return this.notifications;
  }

  changeContent(message: string) {
    this.content.next(message);
  }
}
