import { Injectable } from '@angular/core';

import * as languages from './languages.json';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getLanguages() {
    return languages;
  }
}
