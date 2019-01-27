import { Component, OnInit } from '@angular/core';

import { LanguageService } from '../../services/language/language.service';
import { Language } from '../../models/language';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {

  languagesObject: any;
  languagesObjectProps: any;
  languagesArr = [];

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
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

}
