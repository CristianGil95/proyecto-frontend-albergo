import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Injectable()
export class InformacionService {

  constructor( public http:HttpClient ) {

    this.http.get("assets/data/info.pagina.json")
              .subscribe( data =>{
                  console.log(data);
        })
  }
}
