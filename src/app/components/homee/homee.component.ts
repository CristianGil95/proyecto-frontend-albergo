import { Component, OnInit} from '@angular/core';
import {Router} from "@angular/router"
@Component({
  selector: 'app-homee',
  templateUrl: './homee.component.html'

})
export class HomeeComponent implements OnInit{
  //codice de controlli

  constructor( private router: Router) { }

    ngOnInit() {
    }

    about() {
      // codice e controlli ...
      this.router.navigate(['/about'])
    }
    
    reservation(){

      this.router.navigate(['/reservation'])
    }

}
