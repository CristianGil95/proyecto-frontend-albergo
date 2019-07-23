import { Component, OnInit } from '@angular/core';
import { InformacionService } from "./services/informacion.service";
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {
    AOS.init();
  }
  constructor ( public _is:InformacionService ){


  }
}
