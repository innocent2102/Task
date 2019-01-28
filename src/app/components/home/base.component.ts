import { Component, OnInit } from '@angular/core';

import {DataHelper} from '../../helpers/DataHelper';

export class BaseComponent implements OnInit {

  DataHelper = DataHelper;

  constructor() { }

  ngOnInit() { }

}
