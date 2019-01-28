import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../../services/language/language.service';
import { Language } from '../../../models/language';
import { HomeService } from '../../../services/home/home.service';
import { BaseComponent } from '../base.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent extends BaseComponent implements OnInit {

  languagesObject: any;
  languagesObjectProps: any;
  languagesArr = [];
  notificationsFormControl = new FormControl();
  notifications: any;
  selectedLanguage: Language;
  language: Language;

  constructor(private languageService: LanguageService, private homeService: HomeService) {
    super();
  }

  ngOnInit() {
    this.language = {name: 'English', nativeName: 'English'};
    this.languagesObject  = this.languageService.getLanguages().default;
    this.convertLanguagesObjectToArray();
    this.notifications = this.homeService.getNotifications();
  }

  convertLanguagesObjectToArray() {
    this.languagesObjectProps = Object.keys(this.languagesObject);
    for (const prop of this.languagesObjectProps) {
      this.languagesArr.push(this.languagesObject[prop]);
    }
  }

  getLanguageNameValid(language): boolean {
    const regExp = new RegExp(/[^a-zA-Z]/, 'gm');
    return language.nativeName.match(regExp) !== null;
  }

  onLanguageSelectionChange(language, event) {
    this.selectedLanguage = event.isUserInput ? Object.assign({}, language) : this.selectedLanguage;
  }

  saveLanguage() {
    this.language = Object.assign({}, this.selectedLanguage);
  }

  disactivateNotifications() {
    this.notifications.forEach(notification => {
      notification.show = false;
    });
  }

  activateNotifications() {
    this.notificationsFormControl.value.forEach(item => {
      this.notifications[item.id].show = true;
    });
  }

  saveNotificationTypes() {
    this.disactivateNotifications();
    this.activateNotifications();
  }
}
