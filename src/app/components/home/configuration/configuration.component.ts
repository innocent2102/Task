import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../../services/language/language.service';
import { Language } from '../../../models/language';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  languagesObject: any;
  languagesObjectProps: any;
  languagesArr = [];
  toppings = new FormControl();
  toppingList: string[] = ['Email', 'Mobile', 'Text'];
  selectedLanguage: Language;
  language: Language;

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.language = {name: 'English', nativeName: 'English'};
    this.selectedLanguage = {name: '', nativeName: ''};
    this.languagesObject  = this.languageService.getLanguages().default;
    this.languagesObjectProps = Object.keys(this.languagesObject);
    for (const prop of this.languagesObjectProps) {
      this.languagesArr.push(this.languagesObject[prop]);
    }
  }

  getLanguageNameValid(language: Language): boolean {
    const regExp = new RegExp(/[^a-zA-Z]/, 'gm');
    return language.nativeName.match(regExp) !== null;
  }

  onLanguageSelectionChange(language, event) {
    this.selectedLanguage = event.isUserInput ? Object.assign({}, language) : this.selectedLanguage;
  }

  saveLanguage() {
    this.language = Object.assign({}, this.selectedLanguage);

  }

  test(fomr) {
    console.log(this.language.name);
  }

}
