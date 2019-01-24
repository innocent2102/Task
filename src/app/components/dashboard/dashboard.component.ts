import { Component, OnInit } from '@angular/core';
import { DataHelper } from '../../helpers/DataHelper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  content = '';
  DataHelper = DataHelper;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

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

  constructor() { }

  ngOnInit() {

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


}

