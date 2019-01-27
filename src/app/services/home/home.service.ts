import { Injectable } from '@angular/core';

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
    {type: 'error', message: 'This is error message', date: '2019-01-01'},
    {type: 'warning', message: 'This is warning message', date: '2019-01-02'},
    {type: 'info', message: 'This is info message', date: '2019-01-03'}];

  constructor() { }

  getMenuItems() {
    return this.menuItems;
  }

  getNotifications() {
    return this.notifications;
  }
}
