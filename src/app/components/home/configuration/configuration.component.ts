import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../../services/language/language.service';
import { Language } from '../../../models/language';
import { HomeService } from '../../../services/home/home.service';
import { BaseComponent } from '../base.component';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
  emailForm: FormGroup;
  email: string;

  constructor(private languageService: LanguageService,
              private formBuilder: FormBuilder,
              private homeService: HomeService) {
    super();
  }

  ngOnInit() {
    this.language = {name: 'English', nativeName: 'English'};
    this.languagesObject  = this.languageService.getLanguages().default;
    this.convertLanguagesObjectToArray();
    this.notifications = this.homeService.getNotifications();
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$')]],
    });
  }

  convertLanguagesObjectToArray() {
    this.languagesObjectProps = Object.keys(this.languagesObject);
    for (const prop of this.languagesObjectProps) {
      this.languagesArr.push(this.languagesObject[prop]);
    }
  }

  getLanguageNameValid(language: Language): boolean {
    const regExp = new RegExp(/[^a-zA-Z]/, 'gm');
    return language.nativeName.match(regExp) !== null;
  }

  onLanguageSelectionChange(language: Language, event) {
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

  saveEmail() {
    this.email = this.emailForm.value.email;
  }

}
