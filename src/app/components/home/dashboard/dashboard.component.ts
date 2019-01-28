import {Component, OnInit, ViewEncapsulation} from '@angular/core';

import {MatExpansionPanel} from '@angular/material';
import {BaseComponent} from '../base.component';
import { HomeService } from '../../../services/home/home.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent extends BaseComponent  implements OnInit {

  content: string;

  constructor(private homeService: HomeService) {
    super();
  }

  ngOnInit() {
    this.homeService.currentContent.subscribe(res => {
      this.content = res;
    });
  }

  expandPanel(matExpansionPanel: MatExpansionPanel, event: Event) {
    event.stopPropagation();

    if (!this._isExpansionIndicator(event.target)) {
      matExpansionPanel.toggle();
    }
  }

  private _isExpansionIndicator(target): boolean {
    const expansionIndicatorClass = 'mat-expansion-indicator';
    return (target.classList && target.classList.contains(expansionIndicatorClass) );
  }

}

