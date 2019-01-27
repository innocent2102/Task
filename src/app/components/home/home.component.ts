import { Component, OnInit } from '@angular/core';
import {DataHelper} from '../../helpers/DataHelper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  content = '';
  DataHelper = DataHelper;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  // TODO: move this to service
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

  constructor(private router: Router) { }

  ngOnInit() {
    // TODO: this probably trigger problem with page refreshing end redirecting
    //this.router.navigateByUrl('/home/dashboard');
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
